function checkText(TEXT) {
    var count = 0;
    for (var i = 0; i < unitCombine.length; i++) {
        if (TEXT == unitCombine[i]) {
            count++;
        }
    }
    return count;
}

function checkId(ID) {
    for (var i = 0; i < unitId.length; i++) {
        if (ID != unitId[i]) {
            document.getElementById(unitId[i]).innerText = "XX";
            document.getElementById(unitId[i]).className = "button lock";
        }
    }
}

function checkAllText(TEXT) {
    var count = 0;
    for (var i = 0; i < 100; i++) {
        if (TEXT == document.getElementById(i).innerText) {
            unitCombineId.push(i);
            count++;
        }
    }
    return count;
}

function tutor() {
    console.clear();
    if (count == 4) {
        console.log("Choose 1 of 5!");
        console.log("Two similar units are combined to a higher level unit!\nThe highest lever of unit is: LEVEL 4!");
        console.log("The U units (or UP UNITs) will destroy (X) block(s) above it!\n(X is equal to the number of levels)\nThe other units like:\n D units (DOWN UNITs)\n R units (RIGHT UNITs)\n L units (LEFT UNITs)\nare the similar effect only in different direction!\nWhen the unit is at highest level, you can choose it again to use its effect!");
    } else {
        console.log("Have " + (4 - count) + "/5 left!");
    }
}

function U1(ID) {
    if (ID >= 10) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
    }
}

function U2(ID) {
    if (ID >= 20) {
        document.getElementById(ID - 20).innerText = "";
        document.getElementById(ID - 20).className = "button none";
    }
    U1(ID);
}

function U3(ID) {
    if (ID >= 30) {
        document.getElementById(ID - 30).innerText = "";
        document.getElementById(ID - 30).className = "button none";
    }
    U2(ID);
}

function U4(ID) {
    if (ID >= 40) {
        document.getElementById(ID - 40).innerText = "";
        document.getElementById(ID - 40).className = "button none";
    }
    U3(ID);
}

function D1(ID) {
    if (ID <= 89) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
    }
}

function D2(ID) {
    if (ID <= 79) {
        document.getElementById(ID + 20).innerText = "";
        document.getElementById(ID + 20).className = "button none";
    }
    D1(ID);
}

function D3(ID) {
    if (ID <= 69) {
        document.getElementById(ID + 30).innerText = "";
        document.getElementById(ID + 30).className = "button none";
    }
    D2(ID);
}

function D4(ID) {
    if (ID <= 59) {
        document.getElementById(ID + 40).innerText = "";
        document.getElementById(ID + 40).className = "button none";
    }
    D3(ID);
}

function R1(ID) {
    if ((ID + 1) % 10 != 0 && (ID + 1) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
    }
}

function R2(ID) {
    if ((ID + 2) % 10 != 0 && (ID + 2) < 100) {
        document.getElementById(ID + 2).innerText = "";
        document.getElementById(ID + 2).className = "button none";
    }
    R1(ID);
}

function R3(ID) {
    if ((ID + 3) % 10 != 0 && (ID + 3) < 100) {
        document.getElementById(ID + 3).innerText = "";
        document.getElementById(ID + 3).className = "button none";
    }
    R2(ID);
}

function R4(ID) {
    if ((ID + 4) % 10 != 0 && (ID + 4) < 100) {
        document.getElementById(ID + 4).innerText = "";
        document.getElementById(ID + 4).className = "button none";
    }
    R3(ID);
}

function L1(ID) {
    if (ID % 10 != 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
    }
}

function L2(ID) {
    if ((ID - 1) % 10 != 0 && (ID - 2) >= 0) {
        document.getElementById(ID - 2).innerText = "";
        document.getElementById(ID - 2).className = "button none";
    }
    L1(ID);
}

function L3(ID) {
    if ((ID - 2) % 10 != 0 && (ID - 3) >= 0) {
        document.getElementById(ID - 3).innerText = "";
        document.getElementById(ID - 3).className = "button none";
    }
    L2(ID);
}

function L4(ID) {
    if ((ID - 3) % 10 != 0 && (ID - 4) >= 0) {
        document.getElementById(ID - 4).innerText = "";
        document.getElementById(ID - 4).className = "button none";
    }
    L3(ID);
}