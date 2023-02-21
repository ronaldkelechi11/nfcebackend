const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
        key: 'pk_test_24d2ff75d3c97bd396ca41c1299dddef9b92f72e', // Replace with your public key
        fullname: "Ronald Kelechi",
        email: document.getElementById("email-address").value,
        amount: document.getElementById("amount").value * 100,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        // label: "Optional string that replaces customer email"
        onClose: function () {
            alert('Window closed.');
        },
        callback: function (response) {
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
        }
    });

    handler.openIframe();
}