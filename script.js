document.addEventListener("DOMContentLoaded", () => {     // Initialize EmailJS     
    emailjs.init("e7SHSPHsYiA_MtRZA");      
    const form = document.getElementById("contact-form");     
    form.addEventListener("submit", (e) => {         
        e.preventDefault();          
        emailjs.sendForm("service_m1jgchs", "template_m7pfn3s", form)
                     .then(() => {                 alert("✅ Your message has been sent!");                 form.reset();             })             .catch((err) => {                 console.error("❌ FAILED...", err);
                     alert("Something went wrong. Try again later.");             });     }); })