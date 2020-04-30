var unitList = ["U1", "R1", "D1", "L1"];
var unitCombine = [];
var unitId = [];
var unitCombineId = [];
var unitBlock = [];
var count = 0;

function reset() {
    unitCombine = [];
    unitId = [];
    count = 0;
}

function createButtons() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var button = document.createElement("button");
            button.id = 10 * i + j;
            button.className = "button none";
            button.innerText = "";

            button.onclick = function () {

                var ID = parseInt(this.id);
                if (this.innerText != "XX") {
                    if (this.innerText != "" && count == 0) {
                        unitCombineId = [];
                        if (this.innerText.substr(1, 1) == 4) {
                            if (this.innerText == "U4") {
                                U4(ID);
                            } else if (this.innerText == "D4") {
                                D4(ID);
                            } else if (this.innerText == "R4") {
                                R4(ID);
                            } else if (this.innerText == "L4") {
                                L4(ID);
                            }
                        } else if (this.innerText.substr(1, 1) < 4) {
                            if (checkAllText(this.innerText) >= 4 && this.innerText.substr(1, 1) < 3) {
                                this.innerText = this.innerText.substr(0, 1) + (parseInt(this.innerText.substr(1, 1)) + 2);
                                this.className = "button " + this.innerText;
                                if (this.innerText == "U4") {
                                    U4(ID);
                                } else if (this.innerText == "U3") {
                                    U3(ID);
                                } else if (this.innerText == "D4") {
                                    D4(ID);
                                } else if (this.innerText == "D3") {
                                    D3(ID);
                                } else if (this.innerText == "R4") {
                                    R4(ID);
                                } else if (this.innerText == "R3") {
                                    R3(ID);
                                } else if (this.innerText == "L4") {
                                    L4(ID);
                                } else if (this.innerText == "L3") {
                                    L3(ID);
                                }
                            } else if (checkAllText(this.innerText) >= 2) {
                                this.innerText = this.innerText.substr(0, 1) + (parseInt(this.innerText.substr(1, 1)) + 1);
                                this.className = "button " + this.innerText;
                                if (this.innerText == "U4") {
                                    U4(ID);
                                } else if (this.innerText == "U3") {
                                    U3(ID);
                                } else if (this.innerText == "U2") {
                                    U2(ID);
                                } else if (this.innerText == "D4") {
                                    D4(ID);
                                } else if (this.innerText == "D3") {
                                    D3(ID);
                                } else if (this.innerText == "D2") {
                                    D2(ID);
                                } else if (this.innerText == "R4") {
                                    R4(ID);
                                } else if (this.innerText == "R3") {
                                    R3(ID);
                                } else if (this.innerText == "R2") {
                                    R2(ID);
                                } else if (this.innerText == "L4") {
                                    L4(ID);
                                } else if (this.innerText == "L3") {
                                    L3(ID);
                                } else if (this.innerText == "L2") {
                                    L2(ID);
                                }
                            }
                        }
                    }
                    if (this.innerText == "" && count < 5) {                        
                        var unit = unitList[Math.floor((Math.random() * unitList.length) + 0)];
                        unitCombine.push(unit);
                        unitId.push(this.id);
                        this.innerText = unit;
                        this.className = "button select";
                        tutor();
                        count++;
                    }
                    else if (count == 5) {
                        var TEXT = this.innerText;

                        checkId(this.id);

                        if (TEXT == "U1" && checkText(TEXT) >= 4) {
                            this.innerText = "U3";
                            this.className = "button U3";
                            U3(ID);
                        } else if (TEXT == "U1" && checkText(TEXT) >= 2) {
                            this.innerText = "U2";
                            this.className = "button U2";
                            U2(ID);
                        } else if (TEXT == "U1") {
                            this.className = "button U1";
                            if (ID >= 10) {
                                document.getElementById(ID - 10).innerText = "";
                                document.getElementById(ID - 10).className = "button none";
                            }
                        }

                        if (TEXT == "D1" && checkText(TEXT) >= 4) {
                            this.innerText = "D3";
                            this.className = "button D3";
                            D3(ID);
                        } else if (TEXT == "D1" && checkText(TEXT) >= 2) {
                            this.innerText = "D2";
                            this.className = "button D2";
                            D2(ID);
                        } else if (TEXT == "D1") {
                            this.className = "button D1";
                            if (ID <= 89) {
                                document.getElementById(ID + 10).innerText = "";
                                document.getElementById(ID + 10).className = "button none";
                            }
                        }

                        if (TEXT == "R1" && checkText(TEXT) >= 4) {
                            this.innerText = "R3";
                            this.className = "button R3";
                            R3(ID);
                        } else if (TEXT == "R1" && checkText(TEXT) >= 2) {
                            this.innerText = "R2";
                            this.className = "button R2";
                            R2(ID);
                        } else if (TEXT == "R1") {
                            this.className = "button R1";
                            if ((ID + 1) % 10 != 0 && (ID + 1) < 100) {
                                document.getElementById(ID + 1).innerText = "";
                                document.getElementById(ID + 1).className = "button none";
                            }
                        }

                        if (TEXT == "L1" && checkText(TEXT) >= 4) {
                            this.innerText = "L3";
                            this.className = "button L3";
                            L3(ID);
                        } else if (TEXT == "L1" && checkText(TEXT) >= 2) {
                            this.innerText = "L2";
                            this.className = "button L2";
                            L2(ID);
                        } else if (TEXT == "L1") {
                            this.className = "button L1";
                            if ((ID - 1) % 10 != 0 && (ID - 1) >= 0) {
                                document.getElementById(ID - 1).innerText = "";
                                document.getElementById(ID - 1).className = "button none";
                            }
                        }

                        reset();
                        checkWin();
                    }
                }
            };

            document.body.appendChild(button);

        }

        var br = document.createElement("br");
        document.body.appendChild(br);
    }
}

function randomBlock() {
    unitBlock[0] = Math.floor((Math.random() * 100) + 0);
    block = Math.floor((Math.random() * 100) + 0);
    while (block == unitBlock[0]) {
        block = Math.floor((Math.random() * 100) + 0);
    }
    unitBlock[1] = block;
    while (block == unitBlock[1] || block == unitBlock[0]) {
        block = Math.floor((Math.random() * 100) + 0);
    }
    unitBlock[2] = block;
    while (block == unitBlock[2] || block == unitBlock[1] || block == unitBlock[0]) {
        block = Math.floor((Math.random() * 100) + 0);
    }
    unitBlock[3] = block;
}

function createBlock() {
    randomBlock();
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 4; j++) {
            if (document.getElementById(i).id == unitBlock[j]) {
                document.getElementById(i).innerText = "XX";
                document.getElementById(i).className = "button lock";
            }
        }
    }
}

function checkWin() {
    var flagWin = 0;
    var flagLose = 0;

    for (var i = 0; i < 100; i++) {
        if (document.getElementById(i).innerText == "XX") {
            flagWin++;
        } else if (document.getElementById(i).innerText == "") {
            flagLose++;
        }
    }

    if (flagWin == 0) {
        alert("You Win!");
    } else if (flagLose == 0 || (flagLose < 5 && count <5)) {
        alert("You Lose!");
        location.reload();
    }
}

console.log("Win condition of this game is: HAVE NO XX BLOCKS!\nLet's destroy it!");
console.log("Choose any one to start!");

createButtons();
createBlock();
checkWin();