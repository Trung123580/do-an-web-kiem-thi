import React, { useRef, useState } from 'react';

const VideoControls = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const skip = (seconds: number) => {
        const video = videoRef.current;
        if (video) {
            video.currentTime += seconds;
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (video) setDuration(video.duration);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        const video = videoRef.current;
        if (video) {
            video.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        const video = videoRef.current;
        if (video) {
            video.volume = newVolume;
            setVolume(newVolume);
        }
    };

    const handleFullscreen = () => {
        const video = videoRef.current;
        if (video && video.requestFullscreen) {
            video.requestFullscreen();
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <video
                ref={videoRef}
                src="/ngonngukyhieu.mp4"
                className="w-full rounded"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <button onClick={() => skip(-10)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">⏪ -10s</button>
                <button onClick={togglePlay} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>
                <button onClick={() => skip(10)} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+10s ⏩</button>
                <button onClick={handleFullscreen} className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">🔳 Fullscreen</button>

                {/* Volume control */}
                <div className="relative">
                    <button
                        onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                        className="text-xl px-2 py-1 hover:bg-gray-200 rounded"
                    >
                        🔊
                    </button>

                    {showVolumeSlider && (
                        <div className="absolute top-0 left-10 bg-white shadow-md px-2 py-1 rounded-lg z-10 flex items-center">
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volume}
                                onChange={handleVolume}
                                className="w-28 h-2 accent-blue-500 rounded-lg"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
                <input
                    type="range"
                    min={0}
                    max={duration}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full accent-blue-500"
                />
                <span className="text-xs w-28 text-right">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </span>
            </div>
        </div>
    );
};

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export default VideoControls;
