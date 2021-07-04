data = [0, 1, 0, 25, 0.1, 0.02, 0, 1, 0, 18, 0.2, 0.01, 0, 1, 0, 25, 0.1, 0.01, 0, 3, 0, 25, 0.1,
    0.06, 0, 4, 0, 25, 0.1, 0.04, 2, 5, 0, 0, 0.25, 0.04, 270, 90, 525, 230, 60, 560, 230, 60, 560,
    25, 20, 380, 25, 20, 380, 0, 0, 0, 0, 21, 21, 21, 0, 30, 23, 30, 0, 21, 21, 21, 0, 21, 21, 21, 3,
    27, 38, 14, 3, 27, 35, 15, 4, 25, 37, 13, 5, 14, 14, 10, 1.5, 1.4, 1.3, 1.3, 1.2, 1, "AKAGI",
    "KAGA", "SORYU", "HIRYU", "ENTERPRISE", "HORNET", "YORKTOWN", "MIDWAY", "CARRIERS",
    "TRANSPORTS", "CRUISERS", "TF--16", "TF--17", "MIDWAY", "NONE", "LIGHT", "HEAVY",
    "SUNK", "DESTR'D", "F4F'S", "ZEKES", "SBD'S", "VALS", "TBD'S", "KATES"
];
var A = 0, A8i = 0, A9i = 0, As = "", C = 0, Ci = 0, D0i = 0, D7i = 0, D8 = 0, D9 = 0, Di = 0, E = 0, F7i = 0, F9i = 0;
var Hi = 0, I = 0, J = 0, J9i = 0, K = 0, L = 0, L1 = 0, L1i = 0, L2 = 0, M = 0, M1 = 0, M2 = 0, Mi = 0, Ms = "", N = 0, Ni = 0;
var Oi = 0, P1i = 0, PI = 0, PL = 0, PS = 0, R = 0, S6 = 0, S7 = 0, S8i = 0, S9i = 0, Sa = 0, SD = 0, Si = 0, SP = 0, T0i = 0;
var T1i = 0, Ti = 0, V0i = 0, V1i = 0, V2i = 0, V3i = 0, Vi = 0, X = 0, Y = 0;

var Fa = dim(5, 7), Cia = dim(7, 9), Sia = dim(9, 9), Wa = dim(5), Nsa = dim(7), Tsa = dim(5), C1a = dim(3), Dsa = dim(4), Psa = dim(5);

function FNS(X) { return -bb(Cia[X][8] > 0) - bb(Cia[X][8] >= 60) - bb(Cia[X][8] >= 100); }

async function initGame() {
    //  MIDWAY CAMPAIGN;
    //POKE(53280,6); POKE(53281,1); // does stuff with screen mode.
    printPlain("\x93\x11\x11\x11\x11\x11\x11\x11\x11\x11\x90", TAB(8), "\x12                       "); print();

    printPlain(TAB(8), "\x12 ** MIDWAY CAMPAIGN ** "); print();
    PI = pi / 180;
    printPlain(TAB(8), "\x12                       "); print();
    print();

    printPlain(TAB(11), "COPYRIGHT 1980 BY"); print();

    print();
    printPlain(TAB(14), "AVALON HILL"); print();
    printPlain(TAB(10), "MICROCOMPUTER GAMES"); print();
    print();

    print("\x91\x91\x91\x91\x91\x91\x91\x91\x91");
    await delay(2000);

    V0i = 0;
    V1i = 0;
    Ti = 720;
    Di = 3;
    Ms = "JC67*";
    for (I = 0; I <= 5; I++) {
        for (J = 2; J <= 7; J++) {
            Fa[I][J] = READ();
        }
    }
    for (I = 0; I <= 5; I++) {
        J = READ(); K = READ(); L = READ(); gosub10000();

    }
    for (I = 0; I <= 7; I++) {
        for (J = 0; J <= 3; J++) {
            Cia[I][J] = READ();
        }
        for (J = 4; J <= 8; J++) {
            Cia[I][J] = 0;

        }
    }
    for (I = 0; I <= 5; I++) {
        Wa[I] = READ();
    }
    for (I = 0; I <= 9; I++) {
        Sia[I][9] = - 1;

    } S6 = .041;
    S7 = .043;
    for (I = 0; I <= 7; I++) {
        Nsa[I] = READ();
    }
    for (I = 0; I <= 5; I++) {
        Tsa[I] = READ();
    }
    for (I = 0; I <= 4; I++) {
        Dsa[I] = READ();
    }
    for (I = 0; I <= 5; I++) {
        Psa[I] = READ();
    }
    SD = 54272;
    for (I = SD; I <= SD + 24; I++) {
        POKE(I, 0);
    } POKE(SD + 24, 15);
    print("\x11\x11\x11\x11\x11\x11\x11\x11\x11");
    return 200;
}

function showmap() {//200
    print("\x11\x11 \x90");
    print(" \xCF\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xD0");

    print(" \xB4      \x12    STRATEGIC   MAP    \x92       \xAA");

    print(" \xB4                                    \xAA");

    printPlain(" \xB4", TAB(7));
    gosub10500();
    printPlain(" \xB4", TAB(19), "\x1CTF-16 C.");
    C = Fa[3][4];
    gosub10600();
    print("T\x90       \xAA");

    printPlain(" \xB4", TAB(19), "\x1CTF-17 C.");
    C = Fa[4][4];
    gosub10600();
    print("T\x90       \xAA");

    for (I = 11; I >= 0; I -= 1) {
        As = "\x12\x92\x1C\x90 \xB4      . . . . . . . . . . . .       \xAA";
        if (I == 7) { As = " \xB4\x1C\x12JAP.\x92\x90  . . . . . . . . . . . . \x1F\x12U.S.\x92\x90  \xAA" }
        if (I == 5) { As = "\x12\x92 \xB4\x1CAKAGI\x90 . . . . . . . . . . . . \x1FMIDWAY\x90\xAA" }
        if (I == 4) { As = "\x12\x92 \xB4\x1CKAGA\x90  . . . . . . . . . . . . \x1FHORNET\x90\xAA" }
        if (I == 3) { As = "\x12\x92 \xB4\x1CHIRYU\x90 . . . . . . . . . . . . \x1FENTER-\x90\xAA" }
        if (I == 2) { As = "\x12\x92 \xB4\x1CSORYU\x90 . . . . . . . . . . . .  \x1FPRISE\x90\xAA" }
        if (I == 1) { As = "\x12\x92\x1C\x90 \xB4      . . . . . . . . . . . . \x1FYORK-\x90 \xAA" }
        if (I == 0) { As = "\x12\x92\x1C\x90 \xB4      . . . . . . . . . . . .  \x1FTOWN\x90 \xAA" }
        for (J = 0; J <= 5; J++) {
            if (INT(Fa[J][1] / 100) != I || bb(Fa[J][2] == 0 && J < 3)) continue;
            K = INT(Fa[J][0] / 100) + 1;
            if (K < 1 || K > 12) continue;
            K = 2 * K + 11;
            if (MID$(As, K, 1) != ".") {
                K = K + 1;
                if (MID$(As, K, 1) != " ") {
                    K = K - 2;
                }
            }
            //260
            As = LEFT$(As, K - 1) + MID$(Ms, Fa[J][3], 1) + MID$(As, K + 1);
            //270
        }
        print(As);

    }
    print(" \xCC\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xAF\xBA");
    gosub10100();
    return 300;
}

async function processCmd() {
    //300
    As = "";
    As = await input("\x11\x90\x12FLEET COMMAND ");
    if ((As > "/" && As < ":") || (As > "@" && As < "Z")) {
        //304
        As = LEFT$(As, 1);
        X = ASC(As);
        if (X >= 48 && X <= 84) {
            if (X > 47 && X < 58) { return 1210; }
            if (As == "N") { return 1200; }
            if (As == "T") { return 400; }
            if (As == "S") { return 500; }
            if (As == "M") { return 200; }
            if (As == "A") { return 600; }
        }
    }
    //340
    print(" \x1FLEGAL FLEET COMMANDS ARE:");
    print(" \x90\x12T\x92\x1F TO CHANGE TF FORCES");

    print(" \x90\x12S\x92\x1F TO PRINT STATUS REPORT");
    print(" \x90\x12M\x92\x1F TO REDRAW MAP");

    print(" \x90\x12A\x92\x1F TO ENTER AIRCRAFT COMMAND");

    print(" USE AN \x90\x12N\x92\x1F OR \x90\x120\x92\x1F TO EXECUTE ONLY ONE");
    print(" TACTICAL TURN.");

    print(" ANY NUMBER TO PROCEED FOR THAT AMOUNT   OF TIME.\x90");
    return 300;
}

async function commandTaskforce() {
    //400
    I = await input(" WHICH TASK FORCE "); I = - 3 * bb(I == 16) - 4 * bb(I == 17);
    if (I == 0) { return 300; }
    J = await input(" NEW COURSE "); if (J < 0 || J > 360) { return 300; }
    Fa[I][4] = J * PI;
    printPlain(" \x1F", Tsa[I], " ON COURSE ");
    C = Fa[I][4];
    gosub10600();
    print("T\x90");
    return 300;
}

function showStatus() {
    //500
    printPlain("\x11\x1F", TAB(10));
    gosub10550();
    print();
    printPlain(TAB(10), "\x90****** STATUS ******\x1F"); print();

    print("\x11 \x12CV            ON DECK  BELOW   DAMAGE");

    printPlain(TAB(11), "CAP VF VB VT VF VB VT"); print();
    print();

    for (I = 4; I <= 7; I++) {
        printPlain(" ", Nsa[I], TAB(12));
        C = Cia[I][7];
        gosub10700();
        C = Cia[I][4];
        gosub10700();
        C = Cia[I][5] + 1000 * bb(Cia[I][5] > 999);
        gosub10700();
        C = Cia[I][6];
        gosub10700();
        for (J = 1; J <= 3; J++) {

            C = Cia[I][J];
            gosub10700();

        } J = FNS(I);
        if (I == 7 && J == 3) { J = 4 }
        print(Dsa[J]);
        if (Fa[Cia[I][0]][2] == 2 && I != 7 && FNS(I) < 3) {
            printPlain("  SPOTTED");
        }
        print();

    } printPlain(TAB(10), "\x12CONTACTS\x92"); print();
    gosub10100();
    if (L == 0) {
        print(" \x1CNONE");
    }
    return 300;
}

async function commandCarrier() {
    //600
    As = " ";
    As = await input(" \x90CARRIER "); I = ASC(As);
    I = -bb(4 * bb(I == 69) + 5 * bb(I == 72) + 6 * bb(I == 89) + 7 * bb(I == 77));
    if (I == 0) { return 300 }
    if (FNS(I) >= 2) {
        printPlain(" \x1F", Nsa[I]);
        if (FNS(I) == 3) {
            print(" \x1CDESTROYED.\x1F");
        }
        if (FNS(I) == 2) {
            print(" CANNOT OPERATE AIRCRAFT.");
        }
        return 600;
    }
    //620
    As = await input(" AIRCRAFT COMMAND "); As = As + " ";
    As = LEFT$(As, 2);
    if (As == "CA") { return 900; }
    if (As == "CL") { return 800; }
    As = LEFT$(As, 1);
    if (As == "A") { return 700; }
    if (As == "L") { return 1000; }
    print(" \x1FLEGAL AIRCRAFT COMMANDS ARE");

    print(" \x90A\x1F  TO ARM A STRIKE");
    print(" \x90L\x1F  TO LAUNCH A STRIKE");

    print(" \x90CA\x1F TO SET CAP");

    print(" \x90CL\x1F TO CLEAR DECKS\x90");
    return 300;
}

async function armCarrier() {
    //700
    if (!(Cia[I][4] + Cia[I][5] + Cia[I][6] == 0)) {
        print(" \x1FSTRIKE ALREADY ARMING.");
        return 600;
    }
    //730
    print(" NUMBER OF F4F'S, SBD'S, TBD'S TO SPOT");
    var cmd = await input(" ");
    cmd = cmd.split(",");
    J = parseInt(cmd[0]);
    K = parseInt(cmd[1]);
    L = parseInt(cmd[2]);
    J = - J * bb(J > 0);
    K = - K * bb(K > 0);
    L = - L * bb(L > 0);
    if (J > Cia[I][1]) { J = Cia[I][1] }
    if (K > Cia[I][2]) { K = Cia[I][2] }
    if (L > Cia[I][3]) { L = Cia[I][3] }
    if (J + K + L == 0) { return 600; }
    Cia[I][1] = Cia[I][1] - J;
    Cia[I][4] = J;
    Cia[I][2] = Cia[I][2] - K;
    Cia[I][5] = K + 1000;
    Cia[I][6] = L;
    Cia[I][3] = Cia[I][3] - L;
    printPlain(" \x1F", Nsa[I], " STRIKE ARMING."); print();
    return 600;
}

function clearDecks() {
    //800
    gosub10200();
    printPlain(" \x1F", Nsa[I], " DECKS CLEAR."); print();
    return 600;
}

async function SetCap() {
    //900
    Cia[I][1] = Cia[I][1] + Cia[I][7];
    Cia[I][7] = 0;
    J = await input(" NUMBER OF F4F'S FOR CAP ");
    J = - J * bb(J > 0);
    if (J <= Cia[I][1]) {
        Cia[I][7] = J;
        Cia[I][1] = Cia[I][1] - J;
    } else {
        //930
        Cia[I][7] = Cia[I][1];
        Cia[I][1] = 0;
        J = J - Cia[I][7];
        Cia[I][7] = Cia[I][7] - J * bb(J < Cia[I][4]) - Cia[I][4] * bb(J >= Cia[I][4]);
        Cia[I][4] = (J - Cia[I][4]) * bb(Cia[I][4] > J);
    }
    //960
    printPlain(" \x1F", Nsa[I], " HAS", Cia[I][7], "F4F'S UP FOR CAP."); print();
    return 600;
}

async function commandLaunch() {
    //1000
    if (!(Cia[I][5] + Cia[I][6] > 0 && Cia[I][5] < 1000)) {
        printPlain(" \x1F", Nsa[I], " HAS NO STRIKE ARMED."); print();
        return 600;
    }
    //1020
    gosub10100();
    if (L <= 0) {
        print(" \x1CNO TARGETS.");
        return 600;
    }
    //1030
    J = await input(" \x90CONTACT NUMBER "); if (J > L || J < 1) { return 600; }
    J = C1a[INT(J)];
    M = J;
    N = Cia[I][0];
    gosub10800();
    if (R > 200) {
        printPlain(" \x1FRANGE", -INT(-R), "NM, OUT OF RANGE."); print();
        return 600;
    }
    //1050
    L = .3 * R;
    //if (I == 7 || bb(Ti + L + L >= 240 && Ti + L + L <= 1140)) { GOTO 1070 } //NB: Line missing from C64 version 1060...?

    //1070
    if (!(Ti + L >= 240 && Ti + L < 1140)) {
        print(" \x1FNIGHT ATTACKS NOT POSSIBLE.");
        return 600;
    }
    //1090
    M = - 1;
    for (K = 9; K >= 0; K -= 1) {
        if (Sia[K][9] < 0) { M = K }

    }
    if (M < 0) {
        print(" \x1FTOO MANY STRIKES ALOFT.");
        return 600;
    }
    //1110
    Sia[M][0] = Cia[I][4];
    Sia[M][2] = Cia[I][5];
    Sia[M][4] = Cia[I][6];
    Cia[I][4] = 0;
    Cia[I][5] = 0;
    Cia[I][6] = 0;
    Sia[M][6] = J;
    Sia[M][9] = I;
    Sia[M][7] = Ti + L;
    Sia[M][8] = Ti + L + L;
    Sia[M][3] = 1;
    Sia[M][5] = 0;
    Sia[M][1] = -bb((Sia[M][2] / (Sia[M][2] + Sia[M][4])) > RND(0));
    printPlain(" \x1F", Nsa[I], " STRIKE LAUNCHED."); print();
    return 600;
}

async function tacticalTurn() {
    //1200
    As = "0";
    //1210
    T0i = Ti + INT(VAL(As) * 60);
    D0i = Di - bb(T0i > 1440);
    T0i = T0i + 1440 * bb(D0i > Di);
    for (I = 4; I <= 7; I++) {

        Cia[I][5] = Cia[I][5] + 1000 * bb(Cia[I][5] > 999);

    }
    //1300
    F9i = 0;
    for (M = 1; M <= 2; M++) {
        N = 5;
        gosub10800();
        if (R < 15) { Fa[M][5] = 0; }
        if (J9i > 0) {
            Fa[M][5] = 25 + 7 * bb(M == 2);
            Fa[M][4] = 270 * PI
        }

    }
    M = 0;
    gosub10800();
    if (R > 250) {
        X = 850 - Fa[0][0];
        Y = 450 - Fa[0][1];
        gosub10900();
        Fa[0][4] = A;
    }
    //1330
    if (R <= 100) {
        Fa[0][4] = Fa[0][4] + 180 * PI + 360 * PI * bb(180 * PI > Fa[0][4]);
    }
    //1350
    for (K = 6; K >= 4; K -= 1) {
        if (Fa[Cia[K][0]][2] == 0 || Cia[K][8] == 100) continue
        X = Fa[Cia[K][0]][0] - Fa[0][0];
        Y = Fa[Cia[K][0]][1] - Fa[0][1];
        gosub10900();
        Fa[0][4] = A;
        //1360
    }
    if (J9i > 0) { Fa[0][4] = 270 * PI }
    for (I = 0; I <= 3; I++) {
        if (Cia[I][7] == 5 || FNS(I) > 1) continue;
        Cia[I][7] = Cia[I][7] + Cia[I][1];
        Cia[I][1] = 0;
        if (Cia[I][7] >= 5) {
            1
            Cia[I][1] = Cia[I][7] - 5;
            Cia[I][7] = 5;
        } else {
            //1420
            Cia[I][7] = Cia[I][7] + Cia[I][4];
            Cia[I][4] = 0;
            if (Cia[I][7] <= 5) continue;
            Cia[I][4] = Cia[I][7] - 5;
            Cia[I][7] = 5;
        }
        //1440
    }
    S9i = 0;
    A9i = 0;
    A8i = 0;
    if (Ti > 1140) { return 1700; }
    S8i = 0;
    for (I = 0; I <= 3; I++) {
        if (Cia[I][4] + Cia[I][5] + Cia[I][6] > 0) { S8i = 1 }

    }
    if (S8i != 0) {
        I = 3;
        var action = 1523;
        outer:
        while (true) {
            switch (action) {
                case 1523:
                    I = I + 1;
                    if (FNS(I) > 1) { action = 1525; continue; }
                    K = Cia[I][0];
                    gosub11000();
                    if (K > 0) { action = 1530; continue; }
                case 1525:
                    if (I < 7) { action = 1523; continue; }
                    I = 0;
                case 1530:
                    if (I > 0) { action = 1550; continue; }
                    I = 3;
                case 1533:
                    I = I + 1;
                    if (FNS(I) > 2) { action = 1540; continue; }
                    K = Cia[I][0];
                    gosub11000();
                    if (K > 0) { action = 1542; continue; }
                case 1540:
                    if (I < 7) { action = 1533; continue; }
                    I = 0;
                case 1542:
                    if (I > 0) { action = 1550; continue; }
                    K = 5;
                    gosub11000();
                    I = 7 * K;
                case 1550:
                    S9i = Cia[I][0];
                    if (S9i < 5) { action = 1590; continue; }
                    I = - 1;
                case 1560:
                    I = I + 1;
                    if (Sia[I][6] < 5 || Sia[I][9] == -1 || Sia[I][1] == -1) { action = 1580; continue; }
                    S9i = 0;
                    break outer;
                case 1580:
                    if (I < 9) { action = 1560; continue; }
                    break outer;
            }
        }
    }
    //1590
    if (Fa[3][2] > 0 || Fa[4][2] > 0) { A9i = 1 }
    M = 0;
    N = 5;
    gosub10800();
    if (R <= 235) {
        L = 60 * R / 235;
        if (!(Ti + L < 240 || Ti + L + L > 1140)) {
            A8i = 1;
            if (Cia[3][2] < 12) { A9i = 1; }
        }
    }
    //1620
    if (A9i > 0) { A8i = 0; }
    return 1700;
}

async function tactical1700() {
    var action = 1700;
    outer:
    while (true) {
        switch (action) {
            case 1700:
                if (S9i < 3) { action = 1770; continue; }
                J = - 1;
            case 1710:
                J = J + 1;
                if (Sia[J][9] = -1) { action = 1730; continue; }
                if (J < 9) { action = 1710; continue; }
                break outer;
            case 1730:
                Sia[J][6] = S9i;
                Sia[J][9] = 0;
                M = 0;
                N = S9i;
                gosub10800();
                L = 60 * R / 235;
                Sia[J][7] = Ti + L;
                Sia[J][8] = Ti + L + L;
                Sia[J][0] = 0;
                Sia[J][2] = 0;
                Sia[J][4] = 0;
                for (I = 0; I <= 3; I++) {
                    if (FNS(I) > 1) continue;
                    Sia[J][0] = Sia[J][0] + Cia[I][4];
                    Cia[I][4] = 0;
                    Sia[J][2] = Sia[J][2] + Cia[I][5];
                    Cia[I][5] = 0;
                    Sia[J][4] = Sia[J][4] + Cia[I][6];
                    Cia[I][6] = 0;

                }
                if (Sia[J][2] + Sia[J][4] == 0) { Sia[J][9] = - 1 }
                Sia[J][3] = 1;
                Sia[J][5] = 0;
                if (Sia[J][9] != -1) { Sia[J][1] = -bb((Sia[J][2] / (Sia[J][2] + Sia[J][4])) > RND(0)); }
                break outer;
        }
    }
    //1770
    for (I = 0; I <= 3; I++) {
        gosub10200();
        if (FNS(I) > 1) continue;
        if (A9i != 0) {
            Cia[I][4] = Cia[I][1];
            Cia[I][1] = 0;
            Cia[I][5] = Cia[I][2];
            Cia[I][2] = 0;
            Cia[I][6] = Cia[I][3];
            Cia[I][3] = 0;
        } else {
            //1790
            if (A8i == 0) continue;
            Cia[I][4] = INT(Cia[I][1] / 2);
            Cia[I][5] = INT(Cia[I][2] / 2);
            Cia[I][6] = INT(Cia[I][3] / 2);
            Cia[I][1] = Cia[I][1] - Cia[I][4];
            Cia[I][2] = Cia[I][2] - Cia[I][5];
            Cia[I][3] = Cia[I][3] - Cia[I][6];
        }
        //1820
        if (S9i + A8i + A9i > 0) continue;
        Cia[I][7] = Cia[I][7] + Cia[I][1];
        Cia[I][1] = 0;
        //1830
    }
    T1i = 30 + INT(30 * RND(0));
    Ti = Ti + T1i;
    if (Ti >= T0i && Di == D0i) { F9i = 1 }
    Di = Di - bb(Ti > 1440);
    Ti = Ti + 1440 * bb(Ti > 1440);
    if (Ti >= T0i && Di == D0i) { F9i = 1 }
    for (I = 0; I <= 4; I++) {
        Fa[I][0] = Fa[I][0] + T1i * Fa[I][5] * SIN(Fa[I][4]) / 60;
        Fa[I][1] = Fa[I][1] + T1i * Fa[I][5] * COS(Fa[I][4]) / 60;

    }
    if (!(Ti > 1140 || Ti < 240)) {
        Pi = 1 - 2 * bb(Ti < 300 || bb(Ti > 720 && Ti < 780));
        for (I = 0; I <= 2; I++) {
            if (Fa[I][2] == 2) continue;
            if (Fa[I][5] == 0) { Fa[I][2] = 2 }
            if (Fa[I][2] == 1 && RND(0) > 3 * S7) continue;
            if (RND(0) > Pi * S7 && Fa[I][2] == 0) continue;
            Fa[I][2] = Fa[I][2] - bb(Fa[I][2] < 2);
            if (!(RND(0) > 3 * S7)) {
                Fa[I][2] = Fa[I][2] - bb(Fa[I][2] < 2);
            }
            gosub8000();
            printPlain(" \x1FPBY SPOTS JAPANESE ");
            if (Fa[I][2] == 1) {
                printPlain("SHIPS");
            }
            if (Fa[I][2] != 1) {
                printPlain(Tsa[I]);
            }
            print(".");
            F9i = 1;
            //2160
        }
        if (Fa[0][2] == 2) { Fa[0][3] = 2; }
        Pi = 1 - bb(Ti > 720 && Ti < 780);
        for (I = 3; I <= 4; I++) {
            if (Fa[I][2] == 2) continue;
            if (RND(1) < Pi * S6) { Fa[I][2] = 1 }
            if (Fa[I][2] == 0 || RND(0) > 3 * S6) continue;
            gosub8000();
            printPlain(" \x1FJAPANESE SCOUTS SIGHTED OVER ", Tsa[I], "."); print();
            Fa[I][2] = 2;
            F9i = 1;
            //2210

        }
    } else {
        //2220
        for (I = 0; I <= 4; I++) {
            Fa[I][2] = 0;

        }
        Fa[0][3] = 1;
    }
    //2300 Attacking
    F7i = 1;
    for (I = 0; I <= 9; I++) {
        if (bb(Sia[I][9] = -1) || bb(Sia[I][7] > Ti) || bb(Sia[I][1] = -1)) continue;
        J = 2;
        if (Sia[I][6] < 3) { J = 1 }
        for (K = 0; K <= 4; K += 2) {
            if (Sia[I][K] == 0) { Sia[I][K + 1] = - 1 }
            if (RND(0) > .2) continue;
            if (Sia[I][1] == Sia[I][K + 1]) { Sia[I][1] = - 1 }
            Sia[I][K + 1] = - 1;
            //2330

        }
        if (J != 2) {
            for (K = 0; K <= 4; K += 2) {
                if (Sia[I][K] == 0 || Sia[I][K + 1] > -1) continue;
                printPlain(" \x1F", Nsa[Sia[I][9]], " ", Psa[J + K - 1], " MISS TARGET."); print();
                await delay(200);
                F9i = 1;
                //2350

            }
        }
        //2360
        if (Sia[I][3] + Sia[I][5] == -2 || Sia[I][2] + Sia[I][4] == 0) { return 4000; }
        Fa[Cia[Sia[I][9]][0]][2] = 2;
        Fa[Sia[I][6]][2] = 2;
        if (Fa[0][2] == 2) { Fa[0][3] = 2 }
        gosub8100();
        if (J == 1) {
            printPlain(" \x1F\x12", Nsa[Sia[I][9]]);
        }
        if (J == 2) {
            printPlain(" \x1C\x12JAPANESE");
        }
        printPlain(" STRIKE ATTACKING ", Tsa[Sia[I][6]], "!\x1F"); print();
        M = 3;
        gosub11100();
        F9i = 1;
        K = - 1;
        //2405
        do {
            K = K + 1;
        } while (tactical2405() == 2405);

        //3950
        for (K = 0; K <= 4; K += 2) {
            Sia[I][K + 1] = - 1;

        }
        //4000

    }
    for (L = 0; L <= 7; L++) {
        if (Cia[L][8] < 10 || Cia[L][8] == 100) continue;
        if (!(RND(0) > .05 * bb(1 - bb(L < 4)))) {
            printPlain(" \x1CEXPLOSION ON ", Nsa[L], "!\x1F"); print();
            M = 1;
            gosub11100();
            D8 = 16;
            gosub10400();
        }
        //4130
        if (Cia[L][8] == 100 || RND(0) > .2 * bb(1 - bb(L > 3))) continue;
        Cia[L][8] = Cia[L][8] - 5 * RND(0);
        Cia[L][8] = - Cia[L][8] * bb(Cia[L][8] > 0);
        //4150
    }
    V2i = 0;
    for (J = 0; J <= 9; J++) {

        if (Sia[J][9] = -1) continue;
        V2i = 1;
        if (Ti < Sia[J][8]) continue;
        let action = 5010;
        while (action < 5220) {
            switch (action) {
                case 5110:
                    if (Sia[J][9] < 4) { action = 5120; continue; }
                    F9i = 1;
                    I = Sia[J][9];
                    if (FNS(I) > 1) { action = 5050; continue; }
                case 5020:
                    printPlain(" \x97\x12STRIKE LANDING ON ", Nsa[I], ".\x1F"); print();
                    M = 1;
                    gosub11100();
                    gosub10200();
                    Cia[I][1] = Cia[I][1] + Sia[J][0];
                    Cia[I][2] = Cia[I][2] + Sia[J][2];
                    Cia[I][3] = Cia[I][3] + Sia[J][4];
                    action = 5210; continue;;
                case 5050:
                    if (I > 5 || bb(Cia[4][8] > 60 && Cia[5][8] > 60)) { action = 5060; continue; }
                    K = 4 - bb(I == 4);
                    action = 5110; continue;;
                case 5060:
                    K = 3;
                case 5061:
                    K = K + 1;
                    if (Cia[K][8] > 60) { action = 5070; continue; }
                    M = Cia[I][0];
                    N = Cia[K][0];
                    gosub10800();
                    if (R < 100) { action = 5100; continue; }
                case 5070:
                    if (K < 7) { action = 5061; continue; }
                case 5080:
                    printPlain(" \x97\x12", Nsa[I], " STRIKE SPLASHES.\x1F"); print();
                    M = 1;
                    gosub11100();
                    action = 5210; continue;;
                case 5100:
                    if (RND(0) > .8) { action = 5080; continue; }
                case 5110:
                    printPlain(" \x97\x12", Nsa[I], " STRIKE DIVERTED TO ", Nsa[K], "\x1F"); print();
                    M = 1;
                    gosub11100();
                    I = K;
                    action = 5020; continue;;
                case 5120:
                    L = 0;
                    for (I = 0; I <= 3; I++) {
                        if (FNS(I) < 2) { L = L + 1 }

                    }
                    if (L == 0) { action = 5210; continue; }
                    for (I = 0; I <= 3; I++) {
                        gosub10200();

                    }
                    for (K = 0; K <= 4; K += 2) {
                        Mi = - 1;
                        for (I = 1; I <= L; I++) {
                            do {

                                Mi = -(Mi + 1) * bb(Mi < 3);
                            } while (FNS(Mi) > 1);
                            Cia[Mi][1 + K / 2] = Cia[Mi][1 + K / 2] + INT((L + Sia[J][K] - I) / L);

                        }
                    }
                    for (I = 0; I <= 3; I++) {
                        while (true) {
                            if (Cia[I][1] + Cia[I][2] + Cia[I][3] < 96) break;
                            Cia[I][1] = Cia[I][1] + bb(Cia[I][1] > 0);
                            Cia[I][2] = Cia[I][2] + bb(Cia[I][2] > 0);
                            Cia[I][3] = Cia[I][3] + bb(Cia[I][3] > 0);
                        }
                    }
                case 5210:
                    Sia[J][9] = - 1;
                //5220
            }
        }
    }
    I = - 1;
    //6001
    do {
        I = I + 1;
        if (FNS(I) >= 2) { J9i = 1; break; }
    } while (I < 3);
    //6010
    if (V2i != 1) {
        if (J9i == 1 && Fa[0][0] < 0) return 7000;
        I = - 1;
        //6021
        do {
            I = I + 1;
            if (FNS(I) >= 3) return 7000;
        } while (I < 3);
        //6030
        if (Fa[3][0] > 1200 || Fa[4][0] > 1200) return 7000;
        I = 3;
        //6036
        do {
            I = I + 1;
            if (FNS(I) >= 3) return 7000;
        } while (I < 7);
    }
    //6050
    if (F9i > 0) {
        await delay(2000);
        return 200;
    }
    return 1300;
}

async function tactical2405() {
    if (!(Sia[I][6] == Cia[K][0] && Cia[K][8] < 100)) {
        if (K < 7) return 2405;
        print(" \x90ON THE WAY IN,\x1F");
        gosub10300();
        for (K = 2; K <= 4; K += 2) {

            if (Sia[I][K] == 0 || Sia[I][K + 1] == -1) continue;
            printPlain(" \x1F", Sia[I][K], " ", Psa[J + K - 1], " ATTACK ", Tsa[Sia[I][6]], "!"); print();
            M = 1;
            gosub11100();
            E = Fa[Sia[I][6]][6] * bb(1 + .25 * bb(K == 4) * bb(1 - bb(J == 1)));
            Hi = 0;
            Ni = 0;
            for (L = 1; L <= Sia[I][K]; L++) {
                R = RND(0);
                if (R < E) { Hi = Hi + 1 }
                if (bb(K == 2 || Sia[I][6] == 5) && bb(R < 2 * E && R >= E)) { Ni = Ni + 1 }

            }
            printPlain(" ", Psa[J + K - 1], " MAKE", Hi, "HITS");
            if (!(K == 2 || Sia[I][6] == 5)) {
                print(".");
                M = 1;
                gosub11100();
            } else {
                //2495
                print();
                printPlain("             AND", Ni, "NEAR MISSES."); print();
                M = 1;
                gosub11100();
            }
            //2500
            Vi = bb(16 - 8 * bb(K == 4 && Sia[I][6] != 5)) * Hi + 3 * Ni;
            printPlain("\x90", Vi, "VICTORY POINTS AWARDED.\x1F"); print();
            M = 3;
            gosub11100();
            V0i = V0i - Vi * bb(J == 1);
            V1i = V1i - Vi * bb(J == 2);
            //if (Sia[I][6] != 2) { GOTO 2520 }
            //2520

        }
        print(" \x90ON THE WAY OUT,\x1F");
        gosub10300();
    } else {
        //2600
        Ci = 0;
        for (K = 0; K <= 7; K++) {
            if (Cia[K][0] != Sia[I][6]) continue;
            Ci = Ci + Cia[K][7];
            Cia[K][7] = 0;
            //2620

        }
        if (Ci == 0) { tactical2790(); return -1; }
        K = 2 - 2 * bb(RND(0) > .5);
        if (Sia[I][K + 1] = -1 || Sia[I][K] == 0) { K = 2 - 2 * bb(K == 2) }
        if (K == 4) { F7i = 0 }
        if (!(Sia[I][K + 1] = -1 || Sia[I][K] == 0)) {
            printPlain(" CAP ATTACKS ", Psa[J + K - 1], "."); print();
            M = 1;
            gosub11100();
            L1i = - Sia[I][0] * bb(Sia[I][1] == Sia[I][K + 1]);
            if (L1i > 0) {
                printPlain(" ", Psa[J - 1], " DEFEND ", Psa[J + K - 1], "."); print();
            }
            M = 1;
            gosub11100();
            E = (Ci * Wa[J - 1]) / bb(L1i * Wa[-bb(J == 1)] + Sia[I][K] * Wa[K - bb(J == 1)]);
            E = - E * bb(E < .85) - .85 * bb(E >= .85);
            Hi = 0;
            for (L = 1; L <= Sia[I][K]; L++) {
                if (RND(0) < E) { Hi = Hi + 1 }

            } printPlain(" CAP SHOOTS DOWN", Hi, Psa[J + K - 1], "."); print();
            M = 1;
            gosub11100();
            Sia[I][K] = Sia[I][K] - Hi;
            if (!(L1i == 0)) {
                printPlain(" ", Psa[J - 1], " ATTACK CAP."); print();
                M = 1;
                gosub11100();
                E = bb(L1i * Wa[-bb(J == 1)]) / (Ci * Wa[J - 1]);
                E = - E * bb(E < .85) - .85 * bb(E >= .85);
                Hi = 0;
                for (L = 1; L <= Ci; L++) {
                    if (RND(0) < E) { Hi = Hi + 1 }

                } printPlain(" ", Psa[J - 1], " SHOOT DOWN", Hi, Psa[-bb(J == 1)], "."); print();
                M = 1;
                gosub11100();
                Ci = Ci - Hi;
                if (Ci == 0) { tactical2790(); return -1;}
                E = .5 * (Ci * Wa[J - 1]) / bb(L1i * Wa[-bb(J == 1)]);
                E = - E * bb(E < .85) - .85 * bb(E >= .85);
                Hi = 0;
                for (L = 1; L <= L1i; L++) {
                    if (RND(0) < E) { Hi = Hi + 1 }

                }
                printPlain(" CAP SHOOT DOWN", Hi, Psa[J - 1], "."); print();
                M = 1;
                gosub11100();
                Sia[I][0] = Sia[I][0] - Hi;
            }
        }
        //2781
        if (Ci == 0) { tactical2790(); return -1; }
        L = - 1;
        for (K = 1; K <= Ci; K++) {

            do {
                L = -(L + 1) * bb(L < 7);
            } while (Sia[I][6] != Cia[L][0] || Cia[L][8] >= 60);
            Cia[L][7] = Cia[L][7] + 1;

        }
        if ((Sia[I][3] == -1 || Sia[I][2] == 0) && (Sia[I][5] == -1 || Sia[I][4] == 0)) { return 3950; }
        tactical2790();

    }
    return -1;
}

function tactical2790() {
    //2790
    print(" \x90ON THE WAY IN,\x1F");
    gosub10300();
    for (K = 4; K >= 2; K -= 2) {
        if (Sia[I][K] == 0 || Sia[I][K + 1] == -1) continue;
        Mi = 0;
        for (L = 0; L <= 7; L++) {
            Cia[L][9] = 0;
            if (Cia[L][8] < 100 && Cia[L][0] == Sia[I][6]) { Mi = Mi + 1 }

        } if (Mi == 0) continue;
        Oi = - 1;
        for (N = 1; N <= Mi; N++) {

            do {
                Oi = -(Oi + 1) * bb(Oi < 7);
            } while (Cia[Oi][0] != Sia[I][6] || Cia[Oi][8] == 100);
            Cia[Oi][9] = INT((Sia[I][K] + Mi - N) / Mi);

        }
        for (L = 0; L <= 7; L++) {
            if (Cia[L][9] == 0) continue;
            printPlain(" ", Cia[L][9], " ", Psa[J + K - 1], " ATTACK ", Nsa[L], "."); print();
            M = 1;
            gosub11100();
            Ni = 0;
            Hi = 0;
            E = .2 - bb(K == 4) * .06 * bb(J == 1);
            L1i = 0;
            gosub8200();
            for (M = 1; M <= Cia[L][9]; M++) {
                R = RND(0);
                if (R < E) {
                    printPlain(" \x1C\x12HIT !\x92\x1F");
                    Hi = Hi + 1;
                    L1i = L1i + 1;
                } else {
                    if (!(R >= 2 * E || bb(K == 4 && L != 7))) {
                        printPlain(" \x1CNEAR MISS\x1F");
                        L1i = L1i + 2;
                        Ni = Ni + 1;
                    }
                }
                //2890
                if (L1i > 5) {
                    print();
                }
                L1i = -L1i * bb(L1i < 6);

            } if (L1i > 0) {
                print();
            }
            printPlain(" ", Nsa[L], " TAKES", Hi, "HITS");
            if (Ni != 0) {
                print();
                printPlain("              AND", Ni, "NEAR MISSES");
            }

            //2903
            print(".");
            M = 3;
            gosub11100();
            if (Hi + Ni == 0) continue;
            D7i = 0;
            if (Hi + Ni > 0 && Cia[L][4] + Cia[L][5] + Cia[L][6] > 0 && bb(K == 2 || L == 7)) { D7i = 1 }
            if (D7i > 0) {
                printPlain(" \x1CSECONDARY EXPLOSIONS ON ", Nsa[L], "!\x1F"); print();
            }
            D8 = 16 * bb(1 + D7i - .5 * bb(K == 4 && L != 7));
            for (M = 1; M <= Hi; M++) {
                gosub10400();

            }
            D8 = 3 * (1 + 2 * D7i);
            for (M = 1; M <= Ni; M++) {
                gosub10400();

            }
            //2930

        }
        //2940

    }
    print(" \x90ON THE WAY OUT,\x1F");
    gosub10300();
}
async function endGame() {
    //7000
    gosub8100();
    print("\x93\x11\x11\x11\x11\x11     \x90\x12 THE GAME IS OVER \x92");
    print();

    print(TAB(5), "REPORT:");
    V2i = 0;
    V3i = 0;
    Pi = 0;
    printPlain("  CV", TAB(13), "DAMAGE STATUS"); print();

    for (I = 0; I <= 3; I++) {
        printPlain("  ", Nsa[I], TAB(14), Dsa[FNS(I)]); print();

        for (J = 1; J <= 7; J++) {
            Pi = Pi + Cia[I][J];

        }
        Si = FNS[I];
        V2i = V2i - 100 * bb(Si == 1) - 300 * bb(Si == 2) - 1000 * bb(Si > 2);

    }
    P1i = Pi;
    Pi = 0;
    for (I = 4; I <= 7; I++) {
        printPlain("  ", Nsa[I], TAB(14), Dsa[FNS(I) - bb(I == 7 && FNS(I) == 3)]); print();

        for (J = 1; J <= 7; J++) {
            Pi = Pi + Cia[I][J];

        } Si = FNS(I);
        V3i = V3i - 100 * bb(Si == 1) - 300 * bb(Si == 2) - 1000 * bb(Si > 2);

    }
    P1i = 272 - P1i;
    printPlain("\x11  JAPANESE LOST", P1i, "PLANES."); print();
    V2i = V2i + 5 * P1i;
    Pi = 269 - Pi;
    printPlain("  U.S. LOST", Pi, "PLANES."); print();
    V3i = V3i + 5 * Pi;
    if (V0i > 0) {
        printPlain("  U.S. HAD", V0i, "POINTS IN OTHER HITS."); print();
    }
    if (V1i > 0) {
        printPlain("  JAPANESE HAD", V1i, "POINTS IN OTHER HITS."); print();
    }
    printPlain("\x11  ", Tsa[5], " HAS");
    if (J9i > 0) {
        printPlain(" NOT");
    }
    print(" FALLEN.");
    if (J9i == 0) { V3i = V3i + 1000 }
    V0i = V0i + V2i;
    V1i = V1i + V3i;
    Vi = V0i - V1i;
    if (Vi < 0) {
        printPlain("\x11  JAPANESE");
    }
    if (Vi >= 0) {
        printPlain("\x11  US");
    }
    Vi = ABS(Vi);
    As = "MARGINAL";
    if (Vi >= 1000) { As = "TACTICAL" }
    if (Vi >= 2000) { As = "STRATEGIC" }
    printPlain(" ", As, " VICTORY."); print();

    print("\x93\x11\x11\x11\x11\x11\x11\x11\x11\x11\x11\x11   THANK YOU FOR YOUR TIME");
    print("   PLAYING \x12MIDWAY CAMPAIGN\x92\x11\x11\x11\x11\x11");
}

function gosub8000() { // SOUND
}

function gosub10000() {
    //10000
    L = L + 175 * RND(0) - 200 * RND(0) * bb(I < 3);
    J = (J + K * RND(0)) * PI;
    Fa[I][0] = 850 - L * SIN(J) * bb(I != 5);
    Fa[I][1] = 450 - L * COS(J) * bb(I != 5);
    if (Fa[I][0] > 1199) { Fa[I][0] = 1199 }
    if (Fa[I][1] > 1199) { Fa[I][1] = 1199 }
    J = J + 180 * PI + 360 * PI * bb(J > 180 * PI);
    Fa[I][4] = J;
    if (I > 2) { Fa[I][4] = 205 * PI }
    return;
}

function gosub10100() {
    L = 0;
    for (K = 0; K <= 2; K++) {
        if (Fa[K][2] == 0) continue;
        L = L + 1;
        printPlain(" \x1FCONTACT ", L, " AT POSITION ", INT(Fa[K][0] / 100) + 1);

        printPlain(INT(Fa[K][1] / 100) + 1);
        if (Fa[K][2] == 2) {
            printPlain(Tsa[K]);
        }
        print();
        C1a[L] = K;
        //10140

    }
    return;
}
function gosub10200() {
    Cia[I][5] = Cia[I][5] + 1000 * bb(Cia[I][5] > 999);
    Cia[I][1] = Cia[I][1] + Cia[I][4];
    Cia[I][4] = 0;
    Cia[I][2] = Cia[I][2] + Cia[I][5];
    Cia[I][5] = 0;
    Cia[I][3] = Cia[I][3] + Cia[I][6];
    Cia[I][6] = 0;
    return;
}

function gosub10300() {

    for (K = 0; K <= 4; K += 2) {
        if (Sia[I][K] == 0 || Sia[I][K + 1] == -1) continue;
        E = Fa[Sia[I][6]][7] * bb(-.4 * bb(K == 0) - .7 * bb(K == 2) - bb(K == 4));
        Hi = 0;
        for (L = 1; L <= Sia[I][K]; L++) {
            if (RND(0) < E) { Hi = Hi + 1 }

        } printPlain(" ", Tsa[Sia[I][6]], " AA SHOOTS DOWN", Hi, Psa[J + K - 1], "."); print();

        for (M = 1; M <= 200; M++) {

        } Sia[I][K] = Sia[I][K] - Hi;
        //10340

    }
    return;
}

function gosub10400() {
    if (Cia[L][8] >= 100) { return }
    D9 = RND(0) * D8;
    if (L == 7) { D9 = D9 / 3 }
    if ((K == 2 || L == 7 || RND(0) < .5)) {
        for (L1 = 1; L1 <= bb(6 - bb(Ti < 240 || Ti > 1140)); L1++) {
            if (Cia[L][L1] == 0) continue;
            for (L2 = 1; L2 <= Cia[L][L1]; L2++) {
                if (RND(0) < D9 / 100) { Cia[L][L1] = Cia[L][L1] - 1 }

            }
            //10430

        }
    }
    //10431
    Cia[L][8] = Cia[L][8] + D9;
    if (Cia[L][8] < 60) { return }
    L1 = I;
    I = L;
    gosub10200();
    I = L1;
    Cia[L][1] = Cia[L][1] + Cia[L][7];
    Cia[L][7] = 0;
    if (Cia[L][8] < 100) { return }
    Cia[L][8] = 100;
    printPlain(" \x1C", Nsa[L]);
    if (L == 7) {
        print(" AIRBASE IS DESTROYED.");
    }
    print(" BLOWS UP AND SINKS.\x1F");

    for (L1 = 1; L1 <= 300; L1++) {

    } for (L1 = 1; L1 <= 6; L1++) {
        Cia[L][L1] = 0;

    }
    return;
}

function gosub10500() {
    //10500
    As = STR$(100 + INT(Ti / 60)) + STR$(100 + Ti - 60 * INT(Ti / 60));
    printPlain("  ", MID$(As, 3, 2), ":", MID$(As, 7, 2), " ", STR$(Di));
    print(" JUNE 1942           \xAA");
    if (MID$(As, 3, 2) > "03" && MID$(As, 3, 2) < "19") { POKE(53281, 1); return }
    POKE(53281, 15); return;
}

function gosub10550() {
    //10550
    As = STR$(100 + INT(Ti / 60)) + STR$(100 + Ti - 60 * INT(Ti / 60));
    printPlain("\x11 ", MID$(As, 3, 2), ":", MID$(As, 7, 2), " ", STR$(Di), " JUNE 1942"); print();
    if (MID$(As, 3, 2) > "03" && MID$(As, 3, 2) < "19") { POKE(53281, 1); return }
    POKE(53281, 15); return;
}

function gosub10600() {

    //10600
    As = STR$(INT(C / PI + 1000.5));
    printPlain(MID$(As, 3, 3));
    return;
}

function gosub10700() {
    //10700
    As = STR$(C);
    printPlain(MID$bb(As, 2 + bb(C < 10), 2), " ");
    return;
}

function gosub10800() {
    //10800
    X = Fa[M][0] - Fa[N][0];
    Y = Fa[M][1] - Fa[N][1];
    R = SQR(X * X + Y * Y);
    return;
}
function gosub10900() {
    //10900
    A = bb(90 - 180 * bb(X < 0)) * PI;
    if (Y == 0) { return }
    A = ATN(X / Y);
    if (Y < 0) return gosub10920();
    A = A - 360 * PI * bb(X < 0);
    return;
}

function gosub10920() {
    //10920
    A = A + 180 * PI;
    return;
}

function gosub11000() {
    //11000
    M = 0;
    N = K;
    gosub10800();
    if (Fa[K][2] == 0 || R > 235) { K = 0 }
    L = R * 60 / 235;
    if (Ti + L < 240 || Ti + L + L > 1140) { K = 0 }
    K = -bb(K > 0);
    return;
}

async function gosub11100() { // Delay
    //11100
    await Delay(M * 1000);
}

async function game() {
    var action = 200;
    action = await initGame();
    while (true) {
        switch (action) {
            case 200: action = showmap(); break;
            case 300: action = await processCmd(); break;
            case 400: action = await commandTaskforce(); break;
            case 500: action = showStatus(); break;
            case 600: action = await commandCarrier(); break;
            case 700: action = await armCarrier(); break;
            case 800: action = clearDecks(); break;
            case 900: action = setCap(); break;
            case 1000: action = await commandLaunch(); break;
            case 1200: action = await tacticalTurn(); break;
            case 1700: action = await tactical1700(); break;
            case 7000: await endGame(); return;
            default:
                print("Unknown Line ", action, " Game stopped.");
        }
    }
}



