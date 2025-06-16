//using formula from Dr.Stoikov "Optimal Market Making". The paper models the probability that a
//limit order gets executed as a Poisson process with an exponential decay depending on how far
//your quote is from the mid-price. The execution prob proxy is Pexec(quote's dist from mid-price)=
//1-e^-(base arrival rate (ex:0.5 or 1))(e^-(how fast arrival rates decay w/ dist (ex: 1 or 1.5))
//(quote's dist from mid-price)) * (time horizon)
function executionProb(limitPrice,midprice){

    const delta = Math.abs(limitPrice - midPrice); //quote’s distance from the mid-price
    const A = 1.0; //base arrival rate (e.g. 0.5 or 1)
    const k = 1.5; //how fast arrival rate decays with distance (e.g. 1 or 1.5)
    const t = 1.0; //time horizon (can be 1 unit for simplicity)

    const lambda = A * Math.exp(-k * delta); //arrival rate of market orders hitting limit
    const prob = 1 - Math.exp(-lambda * t);

    return prob;

}