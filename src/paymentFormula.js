function pushPayUSSD(amount) { 
    if (amount < 5000) return 30;
    if (amount >= 5000 && amount < 50000) return  50;
    if (amount >= 50000) return 100; 
}
export function paymentFormular(amount, channel) {
    
    let initialPayment = parseFloat(amount);
    let availableChannels = ['card', 'ussd', 'bank', 'wallet'];
    let pushpayCharge = 0;
    let paystackCharge = 0;
    let totalCharges = 0;
    let Cap = 0;

    if (!availableChannels.includes(channel)) {
        return ('The channel you selected is not available');
    }
    else{

        if (channel === 'bank' || channel === 'card' ) {
             Cap = 2000;
            if (initialPayment < 2500) {
                 pushpayCharge = parseFloat((0.5/100) * initialPayment);
                 paystackCharge = parseFloat((1.5/100) * initialPayment);
                
                 totalCharges = parseFloat(initialPayment + pushpayCharge + paystackCharge);
                return {initialPayment, totalCharges, pushpayCharge, paystackCharge, channel}
             }
            if (initialPayment >= 2500) {
                 pushpayCharge = parseFloat((0.5/100) * initialPayment);
                 paystackCharge = parseFloat((1.5/100) * initialPayment + 100);
                
                if (paystackCharge > Cap) paystackCharge = Cap;

                if (pushpayCharge > Cap) pushpayCharge = Cap;

                totalCharges = parseFloat(initialPayment + pushpayCharge + paystackCharge);

                return {initialPayment, totalCharges, pushpayCharge, paystackCharge, channel}
            }
        }

        if (channel === 'ussd' ) {
             Cap = 1500; 
             pushpayCharge = (1/100) * initialPayment + pushPayUSSD(initialPayment);

             if (pushpayCharge > 1500) pushpayCharge = Cap;
             totalCharges = initialPayment + pushpayCharge;

             return { initialPayment, totalCharges, pushpayCharge, channel}
        }

        if (channel === 'wallet') {
            pushpayCharge = pushPayUSSD(initialPayment);
            totalCharges =  initialPayment + pushpayCharge;
            return { initialPayment, totalCharges, pushpayCharge, channel}
        }

    }
}
