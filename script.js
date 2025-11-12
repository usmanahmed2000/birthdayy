        // Create background animations for each scene
        function createBackgroundAnimations() {
            // Intro Background
            const introBg = document.getElementById('intro-bg');
            createIntroBackground(introBg);
            
            // Chat Background
            const chatBg = document.getElementById('chat-bg');
            createChatBackground(chatBg);
            
            // Transition Background
            const transitionBg = document.getElementById('transition-bg');
            createTransitionBackground(transitionBg);
            
            // Main Website Background
            const mainBg = document.getElementById('main-bg');
            createMainBackground(mainBg);
        }

        function createIntroBackground(container) {
            // Create floating shapes
            for (let i = 0; i < 6; i++) {
                const shape = document.createElement('div');
                shape.className = 'floating-shape';
                shape.style.width = Math.random() * 120 + 40 + 'px';
                shape.style.height = shape.style.width;
                shape.style.left = Math.random() * 100 + 'vw';
                shape.style.top = Math.random() * 100 + 'vh';
                shape.style.background = `radial-gradient(circle, ${i % 2 === 0 ? 'var(--pastel-pink)' : 'var(--pastel-blue)'}, transparent)`;
                shape.style.animationDelay = Math.random() * 10 + 's';
                shape.style.animationDuration = (Math.random() * 10 + 15) + 's';
                container.appendChild(shape);
            }
            
            // Create waves
            for (let i = 0; i < 2; i++) {
                const wave = document.createElement('div');
                wave.className = 'wave';
                wave.style.height = (15 + i * 8) + '%';
                wave.style.opacity = 0.1 - (i * 0.03);
                wave.style.animationDuration = (15 - i * 3) + 's';
                wave.style.animationDelay = (i * 2) + 's';
                container.appendChild(wave);
            }
            
            // Create particles
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
                container.appendChild(particle);
            }
            
            // Create gradient blobs
            for (let i = 0; i < 3; i++) {
                const blob = document.createElement('div');
                blob.className = 'gradient-blob';
                blob.style.width = Math.random() * 250 + 150 + 'px';
                blob.style.height = blob.style.width;
                blob.style.left = Math.random() * 100 + 'vw';
                blob.style.top = Math.random() * 100 + 'vh';
                blob.style.background = `radial-gradient(circle, ${i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}, transparent)`;
                blob.style.animationDelay = Math.random() * 10 + 's';
                blob.style.animationDuration = (Math.random() * 10 + 20) + 's';
                container.appendChild(blob);
            }
        }

        function createChatBackground(container) {
            // Create chat particles
            for (let i = 0; i < 18; i++) {
                const particle = document.createElement('div');
                particle.className = 'chat-particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
                container.appendChild(particle);
            }
            
            // Create chat bubbles
            for (let i = 0; i < 8; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'chat-bubble';
                bubble.style.width = Math.random() * 70 + 30 + 'px';
                bubble.style.height = bubble.style.width;
                bubble.style.left = Math.random() * 100 + 'vw';
                bubble.style.top = Math.random() * 100 + 'vh';
                bubble.style.animationDelay = Math.random() * 8 + 's';
                bubble.style.animationDuration = (Math.random() * 6 + 8) + 's';
                container.appendChild(bubble);
            }
        }

        function createTransitionBackground(container) {
            // Create moving lines
            for (let i = 0; i < 6; i++) {
                const line = document.createElement('div');
                line.className = 'transition-line';
                line.style.width = Math.random() * 150 + 80 + 'px';
                line.style.top = Math.random() * 100 + 'vh';
                line.style.animationDelay = Math.random() * 4 + 's';
                line.style.animationDuration = (Math.random() * 3 + 4) + 's';
                container.appendChild(line);
            }
            
            // Create moving dots
            for (let i = 0; i < 15; i++) {
                const dot = document.createElement('div');
                dot.className = 'transition-dot';
                dot.style.left = Math.random() * 100 + 'vw';
                dot.style.top = Math.random() * 100 + 'vh';
                dot.style.animationDelay = Math.random() * 5 + 's';
                dot.style.animationDuration = (Math.random() * 4 + 5) + 's';
                container.appendChild(dot);
            }
        }

        function createMainBackground(container) {
            // Create main particles
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'main-particle';
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.animationDelay = Math.random() * 7 + 's';
                particle.style.animationDuration = (Math.random() * 5 + 7) + 's';
                container.appendChild(particle);
            }
            
            // Create geometric shapes
            for (let i = 0; i < 12; i++) {
                const geometric = document.createElement('div');
                geometric.className = 'main-geometric';
                geometric.style.width = Math.random() * 50 + 25 + 'px';
                geometric.style.height = geometric.style.width;
                geometric.style.left = Math.random() * 100 + 'vw';
                geometric.style.top = Math.random() * 100 + 'vh';
                
                // Random shapes
                if (i % 3 === 0) {
                    geometric.style.borderRadius = '50%';
                } else if (i % 3 === 1) {
                    geometric.style.borderRadius = '8px';
                }
                
                geometric.style.animationDelay = Math.random() * 15 + 's';
                geometric.style.animationDuration = (Math.random() * 10 + 15) + 's';
                container.appendChild(geometric);
            }
        }

        // Initialize background animations
        createBackgroundAnimations();

        // Scene management
        const scenes = document.querySelectorAll('.scene');
        let currentScene = 0;

        function showScene(index) {
            scenes.forEach(scene => scene.classList.remove('active'));
            scenes[index].classList.add('active');
            currentScene = index;
            
            // Reset confetti when showing step 1
            if (index === 3) {
                createConfetti();
            }
        }

        // Intro scene - handwriting animation (mobile optimized)
        const introText = "Happy Birthday Karan!";
        const handwritingElement = document.getElementById('handwriting-text');
        let introIndex = 0;
        let typingSpeed = 150;

        function typeIntro() {
            if (introIndex < introText.length) {
                // Add character with proper mobile spacing
                handwritingElement.textContent += introText.charAt(introIndex);
                introIndex++;
                
                // Adjust speed for mobile
                const isMobile = window.innerWidth <= 768;
                setTimeout(typeIntro, isMobile ? 180 : 150);
            } else {
                // Move to next scene after a delay
                setTimeout(() => {
                    showScene(1);
                    startChat();
                }, 2000);
            }
        }

        // Start intro animation with a slight delay
        setTimeout(typeIntro, 800);

        // Chat scene
        const chatMessages = document.getElementById('chat-messages');
        const messages = [
            "Happy Birthday Karan! 🎉🥳",
            "Wishing you all the happiness and success!"
        ];
        let messageIndex = 0;

        function startChat() {
            // Remove typing indicator
            document.querySelector('.typing-indicator').style.display = 'none';
            
            // Show first message
            showMessage(0);
        }

        function showMessage(index) {
            if (index < messages.length) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message received';
                messageDiv.textContent = messages[index];
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                messageIndex++;
                
                if (messageIndex < messages.length) {
                    setTimeout(() => {
                        showMessage(messageIndex);
                    }, 1500);
                } else {
                    setTimeout(() => {
                        showScene(2);
                        startTransition();
                    }, 2000);
                }
            }
        }

        // Transition scene
        const transitionTexts = [
            "Main bhi chahta to aesa simply wish kar sakta tha...",
            "Magar mujhe kuch naya aur badiya karna tha!",
            "Are you ready for the surprise?"
        ];
        const typewriterElement = document.getElementById('typewriter-text');
        const continueBtn = document.getElementById('continue-btn');
        let textIndex = 0;
        let isDeleting = false;
        let pauseTime = 1500;

        function startTransition() {
            typeText();
        }

        function typeText() {
            const currentText = transitionTexts[textIndex];
            
            if (isDeleting) {
                // Deleting text
                typewriterElement.textContent = currentText.substring(0, typewriterElement.textContent.length - 1);
                
                if (typewriterElement.textContent === '') {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % transitionTexts.length;
                    setTimeout(typeText, 500);
                } else {
                    setTimeout(typeText, 50);
                }
            } else {
                // Typing text
                typewriterElement.textContent = currentText.substring(0, typewriterElement.textContent.length + 1);
                
                if (typewriterElement.textContent === currentText) {
                    if (textIndex === transitionTexts.length - 1) {
                        // Last text - show button
                        continueBtn.style.display = 'block';
                        return;
                    }
                    
                    isDeleting = true;
                    setTimeout(typeText, pauseTime);
                } else {
                    setTimeout(typeText, 100);
                }
            }
        }

        continueBtn.addEventListener('click', () => {
            showScene(3);
        });

        // Main website navigation
        const steps = document.querySelectorAll('.step');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let currentStep = 0;

        function showStep(index) {
            steps.forEach(step => step.classList.remove('active'));
            steps[index].classList.add('active');
            currentStep = index;
            
            // Update button states
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === steps.length - 1;
        }

        prevBtn.addEventListener('click', () => {
            if (currentStep > 0) {
                showStep(currentStep - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                showStep(currentStep + 1);
            }
        });

        // Blow candle functionality
        const blowBtn = document.getElementById('blow-btn');
        const candleFlame = document.getElementById('candle-flame');
        
        blowBtn.addEventListener('click', () => {
            // Animate flame going out
            candleFlame.style.animation = 'none';
            candleFlame.style.opacity = '0';
            candleFlame.style.transition = 'opacity 0.5s ease';
            
            // Show success message after a delay
            setTimeout(() => {
                alert('Yay! Your wish has been sent to the universe! 🎉');
                showStep(3);
            }, 1000);
        });

        // Wish grid functionality
        const wishItems = document.querySelectorAll('.wish-item');
        wishItems.forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                this.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.5)';
                
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.boxShadow = '';
                }, 300);
            });
        });

        // Envelope functionality
        const envelope = document.getElementById('envelope');
        
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
        });

        // Confetti effect
        function createConfetti() {
            const container = document.getElementById('confetti-container');
            container.innerHTML = '';
            
            const colors = ['#8A2BE2', '#FF6B8B', '#4ECDC4', '#FFB6C1', '#A0E7E5'];
            
            for (let i = 0; i < 40; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(confetti);
            }
        }

        // Initialize the first step
        showStep(0);

        // Handle window resize for better mobile experience
        window.addEventListener('resize', function() {
            // Reset typing if needed when orientation changes
            if (currentScene === 0) {
                // Re-center content on resize
                document.querySelector('.intro-content').style.transform = 'translateY(0)';
            }
        });