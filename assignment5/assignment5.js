function myCalculate()
{
    var invest_amt = document.getElementById("inv_amt").value;
    var int_rate = (document.getElementById("air").value)/100;
    var years = document.getElementById("noyr").value;

    if(invest_amt == "" || int_rate == "" || years == "")
    {
        window.alert("!!! Provide input....");
        return false;
    }
    var p = Math.pow((1+int_rate),years);
    var future_value = Math.floor(invest_amt * p);    
    document.getElementById("fut_val").value = future_value;
    
}
