// Initialize Icons
lucide.createIcons();

// Form AI integration logic using WhatsApp funnel
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Format WhatsApp message
    const waNumber = "5511999999999"; // TODO: Replace with the actual Merece Saúde Agro commercial number
    const welcomeMessage = `Olá, vim da página Agro. Meu nome é ${name}, da empresa/email: ${email}. O telefone para contato é ${phone}. Gostaria de agendar uma demonstração.`;
    
    // Encode for URL
    const messageEncoded = encodeURIComponent(welcomeMessage);
    
    const waLink = `https://wa.me/${waNumber}?text=${messageEncoded}`;
    
    // Redirect user to WhatsApp Bot/IA Funnel
    window.open(waLink, '_blank');
});
