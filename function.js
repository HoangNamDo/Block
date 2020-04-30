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

function U2(ID) {
    if (ID >= 20) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
        document.getElementById(ID - 20).innerText = "";
        document.getElementById(ID - 20).className = "button none";
    } else if (ID >= 10) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
    }
}

function U3(ID) {
    if (ID >= 30) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
        document.getElementById(ID - 20).innerText = "";
        document.getElementById(ID - 20).className = "button none";
        document.getElementById(ID - 30).innerText = "";
        document.getElementById(ID - 30).className = "button none";
    } else if (ID >= 20) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
        document.getElementById(ID - 20).innerText = "";
        document.getElementById(ID - 20).className = "button none";
    } else if (ID >= 10) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
    }
}

function U4(ID) {
    if (ID >= 40) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
        document.getElementById(ID - 20).innerText = "";
        document.getElementById(ID - 20).className = "button none";
        document.getElementById(ID - 30).innerText = "";
        document.getElementById(ID - 30).className = "button none";
        document.getElementById(ID - 40).innerText = "";
        document.getElementById(ID - 40).className = "button none";
    } else if (ID >= 30) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
        document.getElementById(ID - 20).innerText = "";
        document.getElementById(ID - 20).className = "button none";
        document.getElementById(ID - 30).innerText = "";
        document.getElementById(ID - 30).className = "button none";
    } else if (ID >= 20) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
        document.getElementById(ID - 20).innerText = "";
        document.getElementById(ID - 20).className = "button none";
    } else if (ID >= 10) {
        document.getElementById(ID - 10).innerText = "";
        document.getElementById(ID - 10).className = "button none";
    }
}

function D2(ID) {
    if (ID <= 79) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
        document.getElementById(ID + 20).innerText = "";
        document.getElementById(ID + 20).className = "button none";
    } else if (ID <= 89) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
    }
}

function D3(ID) {
    if (ID <= 69) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
        document.getElementById(ID + 20).innerText = "";
        document.getElementById(ID + 20).className = "button none";
        document.getElementById(ID + 30).innerText = "";
        document.getElementById(ID + 30).className = "button none";
    } else if (ID <= 79) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
        document.getElementById(ID + 20).innerText = "";
        document.getElementById(ID + 20).className = "button none";
    } else if (ID <= 89) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
    }
}

function D4(ID) {
    if (ID <= 59) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
        document.getElementById(ID + 20).innerText = "";
        document.getElementById(ID + 20).className = "button none";
        document.getElementById(ID + 30).innerText = "";
        document.getElementById(ID + 30).className = "button none";
        document.getElementById(ID + 40).innerText = "";
        document.getElementById(ID + 40).className = "button none";
    } else if (ID <= 69) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
        document.getElementById(ID + 20).innerText = "";
        document.getElementById(ID + 20).className = "button none";
        document.getElementById(ID + 30).innerText = "";
        document.getElementById(ID + 30).className = "button none";
    } else if (ID <= 79) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
        document.getElementById(ID + 20).innerText = "";
        document.getElementById(ID + 20).className = "button none";
    } else if (ID <= 89) {
        document.getElementById(ID + 10).innerText = "";
        document.getElementById(ID + 10).className = "button none";
    }
}

function R2(ID) {
    if ((ID + 2) % 10 != 0 && (ID + 2) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
        document.getElementById(ID + 2).innerText = "";
        document.getElementById(ID + 2).className = "button none";
    } else if ((ID + 1) % 10 != 0 && (ID + 1) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
    }
}

function R3(ID) {
    if ((ID + 3) % 10 != 0 && (ID + 3) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
        document.getElementById(ID + 2).innerText = "";
        document.getElementById(ID + 2).className = "button none";
        document.getElementById(ID + 3).innerText = "";
        document.getElementById(ID + 3).className = "button none";
    } else if ((ID + 2) % 10 != 0 && (ID + 2) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
        document.getElementById(ID + 2).innerText = "";
        document.getElementById(ID + 2).className = "button none";
    } else if ((ID + 1) % 10 != 0 && (ID + 1) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
    }
}

function R4(ID) {
    if ((ID + 4) % 10 != 0 && (ID + 4) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
        document.getElementById(ID + 2).innerText = "";
        document.getElementById(ID + 2).className = "button none";
        document.getElementById(ID + 3).innerText = "";
        document.getElementById(ID + 3).className = "button none";
        document.getElementById(ID + 4).innerText = "";
        document.getElementById(ID + 4).className = "button none";
    } else if ((ID + 3) % 10 != 0 && (ID + 3) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
        document.getElementById(ID + 2).innerText = "";
        document.getElementById(ID + 2).className = "button none";
        document.getElementById(ID + 3).innerText = "";
        document.getElementById(ID + 3).className = "button none";
    } else if ((ID + 2) % 10 != 0 && (ID + 2) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
        document.getElementById(ID + 2).innerText = "";
        document.getElementById(ID + 2).className = "button none";
    } else if ((ID + 1) % 10 != 0 && (ID + 1) < 100) {
        document.getElementById(ID + 1).innerText = "";
        document.getElementById(ID + 1).className = "button none";
    }
}

function L2(ID) {
    if ((ID - 2) % 10 != 0 && (ID - 2) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
        document.getElementById(ID - 2).innerText = "";
        document.getElementById(ID - 2).className = "button none";
    } else if ((ID - 1) % 10 != 0 && (ID - 1) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
    }
}

function L3(ID) {
    if ((ID - 3) % 10 != 0 && (ID - 3) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
        document.getElementById(ID - 2).innerText = "";
        document.getElementById(ID - 2).className = "button none";
        document.getElementById(ID - 3).innerText = "";
        document.getElementById(ID - 3).className = "button none";
    } else if ((ID - 2) % 10 != 0 && (ID - 2) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
        document.getElementById(ID - 2).innerText = "";
        document.getElementById(ID - 2).className = "button none";
    } else if ((ID - 1) % 10 != 0 && (ID - 1) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
    }
}

function L4(ID) {
    if ((ID - 4) % 10 != 0 && (ID - 4) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
        document.getElementById(ID - 2).innerText = "";
        document.getElementById(ID - 2).className = "button none";
        document.getElementById(ID - 3).innerText = "";
        document.getElementById(ID - 3).className = "button none";
        document.getElementById(ID - 4).innerText = "";
        document.getElementById(ID - 4).className = "button none";
    } else if ((ID - 3) % 10 != 0 && (ID - 3) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
        document.getElementById(ID - 2).innerText = "";
        document.getElementById(ID - 2).className = "button none";
        document.getElementById(ID - 3).innerText = "";
        document.getElementById(ID - 3).className = "button none";
    } else if ((ID - 2) % 10 != 0 && (ID - 2) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
        document.getElementById(ID - 2).innerText = "";
        document.getElementById(ID - 2).className = "button none";
    } else if ((ID - 1) % 10 != 0 && (ID - 1) >= 0) {
        document.getElementById(ID - 1).innerText = "";
        document.getElementById(ID - 1).className = "button none";
    }
}