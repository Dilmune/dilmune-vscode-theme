#include <memory>
#include <string>
#include <vector>
#include <algorithm>
#include <functional>
#include <stdexcept>

namespace media {

constexpr int kMaxQueueSize = 1024;
constexpr double kDefaultVolume = 0.75;

template <typename T>
class RingBuffer {
public:
    explicit RingBuffer(size_t capacity) : capacity_(capacity) {
        buffer_.reserve(capacity);
    }

    void push(T value) {
        if (buffer_.size() >= capacity_) {
            buffer_.erase(buffer_.begin());
        }
        buffer_.push_back(std::move(value));
    }

    [[nodiscard]] size_t size() const noexcept { return buffer_.size(); }
    [[nodiscard]] bool empty() const noexcept { return buffer_.empty(); }

private:
    size_t capacity_;
    std::vector<T> buffer_;
};

struct AudioTrack {
    std::string title;
    std::string artist;
    double duration_seconds;
    bool is_playing = false;
};

class AudioPlayer {
public:
    AudioPlayer() : volume_(kDefaultVolume), queue_(kMaxQueueSize) {}

    void enqueue(std::unique_ptr<AudioTrack> track) {
        if (!track) {
            throw std::invalid_argument("track must not be null");
        }
        playlist_.push_back(std::move(track));
    }

    void sortByDuration() {
        std::sort(playlist_.begin(), playlist_.end(),
            [](const auto& a, const auto& b) {
                return a->duration_seconds < b->duration_seconds;
            });
    }

    [[nodiscard]] auto findByArtist(const std::string& artist) const {
        std::vector<AudioTrack*> results;
        for (const auto& track : playlist_) {
            if (track->artist == artist) {
                results.push_back(track.get());
            }
        }
        return results;
    }

private:
    double volume_;
    RingBuffer<std::string> queue_;
    std::vector<std::unique_ptr<AudioTrack>> playlist_;
};

}  // namespace media
