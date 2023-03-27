// Pulse Oximeter Reading 2

let pulseRate = 40

function pulseRateQualified(pulseRate){
    if (pulseRate <=100){
        console.log ("Normal reading.");
    }
    else if ((pulesRate >=101) && (pulseRate <=109));{
        console.log ("Acceptable to continue home monitoring.");
    }
    if ((pulseRate >=110) && (pulseRate <=130));{
        console.log ("Seek advice from health professionals.");
    }
    if (pulseRate >=131);{
        console.log ("Seek urgent medical advice.");
    }
}

pulseRateQualified(pulseRate);