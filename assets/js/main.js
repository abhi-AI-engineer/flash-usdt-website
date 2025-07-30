
 fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

     fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });


document.addEventListener("DOMContentLoaded", function() {
    
    const loadComponent = (componentPath, placeholderId) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
            fetch(componentPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Could not load ${componentPath}, status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    placeholder.innerHTML = data;
                })
                .catch(error => {
                    console.error('Error loading component:', error);
                    placeholder.innerHTML = `<p style="text-align:center; color:red;">Error: Could not load ${placeholderId}.</p>`;
                });
        }
    };

  
    loadComponent('header.html', 'header-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
});













// assets/js/main.js में यह कोड डालें

// जब पूरा पेज लोड हो जाए, तब यह कोड चले
document.addEventListener('DOMContentLoaded', function() {

    // उन दोनों एलिमेंट्स को चुनें जिनकी हमें ज़रूरत है
    const planSelect = document.getElementById('planSelect');
    const resultDisplay = document.querySelector('.earn-calculator .result');

    // ड्रॉपडाउन में बदलाव होने पर क्या करना है, यह सेट करें
    planSelect.addEventListener('change', function() {
        // जो भी ऑप्शन चुना गया है, उसकी वैल्यू को पाएं
        const selectedValue = planSelect.value;
        
        // अगर कोई वैल्यू चुनी गई है (खाली नहीं है)
        if (selectedValue) {
            // रिजल्ट वाले div में उस वैल्यू को दिखा दें
            resultDisplay.textContent = selectedValue;
        }
    });

});


// assets/js/main.js में इस कोड को डालें (पुराने प्रीलोडर कोड की जगह)

// ========== ADVANCED PRELOADER SCRIPT (WITH MINIMUM 10 SECONDS DELAY) ==========

document.addEventListener('DOMContentLoaded', function() {
    
    // दो फ्लैग यह ट्रैक करने के लिए कि शर्तें पूरी हुई हैं या नहीं
    let isPageFullyLoaded = false;
    let isMinTimeElapsed = false;

    // यह फंक्शन प्रीलोडर को छिपाने की कोशिश करेगा
    function tryHidePreloader() {
        // केवल तभी छिपाएं जब पेज भी लोड हो चुका हो और 10 सेकंड भी बीत चुके हों
        if (isPageFullyLoaded && isMinTimeElapsed) {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('preloader-hidden');
            }
        }
    }

    // 1. पेज लोड होने का इंतज़ार करें
    window.addEventListener('load', function() {
        // जब पेज लोड हो जाए, तो इस फ्लैग को true पर सेट करें
        isPageFullyLoaded = true;
        // अब प्रीलोडर को छिपाने की कोशिश करें (यह तभी छिपेगा जब 10 सेकंड भी बीत चुके हों)
        tryHidePreloader();
    });

    // 2. 10-सेकंड के टाइमर को सेट करें
    setTimeout(function() {
        // जब 10 सेकंड बीत जाएं, तो इस फ्लैग को true पर सेट करें
        isMinTimeElapsed = true;
        // अब प्रीलोडर को छिपाने की कोशिश करें (यह तभी छिपेगा जब पेज भी लोड हो चुका हो)
        tryHidePreloader();
    }, 1000); // 10000 मिलीसेकंड = 10 सेकंड

});