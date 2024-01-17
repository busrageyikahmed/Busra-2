console.log("Hi, Welcome to my portfolio! Feel free to browse around and explore. I hope you find something you like.");

// hamburger menu toggle
function toggleMenu() {
    const navElement = document.getElementById("myNav");

    if (navElement.classList.contains("closed")) {
        navElement.classList.remove("closed");
        navElement.classList.add("open");
    } else {
        navElement.classList.remove("open");
        navElement.classList.add("closed");
    }
}

// smooth scrolling function
function smoothScrollToTarget(target) {
    const headerOffset = 80;
    const $target = $(target);
    
    $('html, body').animate({
        scrollTop: $target.offset().top - headerOffset
    }, 1000);

    $target.attr('tabindex', '-1');
    $target.focus();
    return false;
}






<script   src="https://code.jquery.com/jquery-3.7.1.min.js"   integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="   crossorigin="anonymous"></script>


