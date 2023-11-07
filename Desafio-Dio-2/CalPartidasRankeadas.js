function amountWin(win, loss) {
    let level = ""
    let over = win - loss

    //Verificar level do da partida
    if (over < 10) {
        level = "Ferro"
    } else if (over >= 11 && over <= 20) {
        level = "Bronze"
    } else if (over >= 21 && over <= 50) {
        level = "Prata"
    }
    else if (over >= 51 && over <= 80) {
        level = "Ouro"
    }
    else if (over >= 81 && over <= 90) {
        level = "Diamante"
    }
    else if (over >= 91 && over <= 100) {
        level = "Lendario"
    }
    else if (over >= 101) {
        level = "Imortal"
    }
    console.log(" O Héroi tem de saldo " + over + " está no nível de " + level)
}
amountWin(200, 50)