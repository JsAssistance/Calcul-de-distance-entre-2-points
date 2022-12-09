// Calculer la distance entre deux couples(deux points) est souvent utile pour trouver

//  le meilleure chemin sur une carte.La formule pour trouver la distance
//   entre deux points s'inspire de la formule de Pythagore (c2=√a2+b2)
//  et de ses théories sur les triangles. Vous trouverez la réponse que vous souhaitez ci dessous


function sqr(a) {
    return a * a;
}

function Distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
}

document.write("Calcul la distance entre deux points (0,0)-(10,10): " + Distance(0, 0, 10, 10) + "<BR>");
document.write("Calcul la distance entre deux points (2,2)-(10,10): " + Distance(2, 2, 10, 10) + "<BR>");
document.write("Calcul la distance entre deux points (1,1)-(8,8): " + Distance(1, 1, 8, 8) + "<BR><BR><BR><BR>");


document.write("Calcul la distance entre deux points (0,0)-(10,10): " + Distance(0, 0, 20, 20) + "<BR>");
document.write("Calcul la distance entre deux points (2,2)-(10,10): " + Distance(2, 2, 10, 10) + "<BR>");
document.write("Calcul la distance entre deux points (1,1)-(8,8): " + Distance(1, 1, 8, 8) + "<BR>");