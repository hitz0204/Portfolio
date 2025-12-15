document.addEventListener('DOMContentLoaded', () => {
            // Select all video containers
            const videoContainers = document.querySelectorAll('.video-container');

            videoContainers.forEach((videoContainer) => {
                const video = videoContainer.querySelector('.vid');
                const overlay = videoContainer.querySelector('.overlay');

                // Function to play video
                function playVideo() {
                    video.play();
                    
                }

                // Function to pause video
                function pauseVideo() {
                    video.pause();
    
                }

                // Add event listeners for hover and touch support
                videoContainer.addEventListener('mouseenter', playVideo);
                videoContainer.addEventListener('mouseleave', pauseVideo);
                videoContainer.addEventListener('touchstart', playVideo);
                videoContainer.addEventListener('touchend', pauseVideo);
            });
        });


