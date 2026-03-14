const DEBOUNCE_MS = 300;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

class EventEmitter {
  #listeners = new Map();

  on(event, callback) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, []);
    }
    this.#listeners.get(event).push(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    const cbs = this.#listeners.get(event);
    if (cbs) {
      this.#listeners.set(event, cbs.filter((fn) => fn !== callback));
    }
  }

  emit(event, ...args) {
    const cbs = this.#listeners.get(event) ?? [];
    cbs.forEach((fn) => fn(...args));
  }
}

async function loadUserProfile(userId) {
  const response = await fetch(`/api/users/${userId}/profile`);

  if (!response.ok) {
    throw new Error(`Profile fetch failed: ${response.status}`);
  }

  const { name, email, preferences = {} } = await response.json();
  const { theme = 'system', language = 'en' } = preferences;

  return { name, email, theme, language };
}

function debounce(fn, delay = DEBOUNCE_MS) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function validateForm(fields) {
  const errors = {};
  for (const [key, value] of Object.entries(fields)) {
    if (!value?.trim()) {
      errors[key] = `${key} is required`;
    } else if (key === 'email' && !EMAIL_REGEX.test(value)) {
      errors[key] = 'Invalid email address';
    }
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export { EventEmitter, loadUserProfile, debounce, validateForm };
