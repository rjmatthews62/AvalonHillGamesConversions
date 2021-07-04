var datapos = 0;
var data = [];

var linePos = 0; // Estimated cursor position for TAB
var lastkey = "";
var lastKeyActive = true;
var enhanced = false;
var printdest = "console";
var pi = Math.pi;

function RESTORE() {
    datapos = 0;
}

function READ() {
    return data[datapos++];
}


function checkParams() {
    var q = window.location.search;
    var params = new URLSearchParams(q);
    if (params.get("enhanced") > 0) {
        enhanced = true;
    }
}

function lastKeyPress(event) {
    if (lastKeyActive) lastkey = ev.which;
}

function cls() { // Clear screeen.
    $("#" + printdest).html("=".repeat(64) + "\n");
}

function calcLinePos(s) {
    var ix = s.lastIndexOf("\n");
    if (ix < 0) ix = 0;
    return s.length - ix;
}

const C64Chars = {
    "\x11": "\n",//	Down	
    "\x12": "",//	reverse	
    "\x1C": "",//	red	
    "\x1F": "",	//blue	
    "\x90": "",//	black	
    "\x91": "",//	Up	
    "\x92": "",//	reverse off	
    "\x93": "",//	clear	
    "\x97": "",//	dark grey	
    "\xAA": "\u2503", // line right	
    "\xAF": "\u2501", //line bottom
    "\xB4": "\u2503", //line left
    "\xB7": "\u2501", //line top
    "\xBA": "\u251B", //lr
    "\xCC": "\u2517", //ll
    "\xCF": "\u250F", //ul
    "\xD0": "\u2513" //ur
};

function replaceC64(s) {
    var result = "";
    for (c of s) {
        if (c in C64Chars) result += C64Chars[c];
        else result += c;
    }
    return result;
}

function printArgs(args, usecr = true, space = true) {
    var s = "";
    for (let i = 0; i < args.length; i++) {
        if (i > 0 && space) s += " ";
        s += replaceC64(args[i]);
    }
    var content = $("#" + printdest).html();
    if (linePos > 0) {
        let x = calcLinePos(content);
        while (x++ < linePos) content += " ";
    }
    content += s;
    linePos += s.length;
    if (usecr) {
        content += "\n";
        linePos = 0;
    }
    $("#" + printdest).html(content);
    window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom
}

function print() {
    printArgs(arguments, true);
}

function printNoCr() {
    printArgs(arguments, false);
}

function printPlain() {
    printArgs(arguments, false, false);
}

function doInputWait() {
    var p = new Promise((myResolve, myReject) => {
        $("#enter").click(myResolve);
    }
    );
    return p;
}

async function input(prompt, adefault = "") {
    print(prompt);
    $("#enter").show();
    $("#input").show().val(adefault).focus().select();
    lastkeyActive = false;
    window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom
    await doInputWait();
    $("#enter").hide();
    $("#input").hide();
    $("#interrupt").focus();
    lastKeyActive = true;
    lastkey = "";
    return $("#input").val().toUpperCase();
}

async function inputNum(prompt) {
    let result = await input(prompt);
    let n = parseInt(result, 10);
    if (isNaN(n)) n = 0;
    return n;
}

function GET() { // Check for keypressed.
    var result = lastkey.toString();
    lastkey = "";
    return result;
}

function dim(l1, l2) {
    var result;
    if (l2 == undefined) {
        return new Array(l1 + 1);
    }
    result = new Array();
    for (let i = 0; i <= l1; i++) result.push(new Array(l2 + 1));
    return result;
}

function dim1(n) {
    return new Array(n + 1);
}

function RND() {
    return Math.random();
}

function INT(n) {
    return Math.floor(n);
}

function SIN(n) {
    return Math.sin(n);
}

function COS(n) {
    return Math.cos(n);
}

function ATN(n) {
    return Math.atan(n);
}

function ABS(n) {
    return Math.abs(n);
}

function SQR(n) {
    return Math.sqrt(n);
}

function SGN(n) {
    if (n < 0) return -1;
    else if (n > 0) return 1;
    else return 0;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pause() {
    await delay(1000);
    print();
}

function bb(abool) { //BASIC Boolean behaviour (-1,0)
    return abool ? -1 : 0;
}

function ASC(c) {
    if (c == "") c = " ";
    return c.charCodeAt(0);
}

function CHR(n) {
    return String.fromCharCode(n);
}

function LEN(s) {
    return s.length;
}

function MID(s, i, len) {
    return s.substr(i - 1, len);
}

function LEFT(s, len) {
    return s.substr(0, len);
}

function RIGHT$(s, pos) {
    return s.substr(-pos);
}

function STR$(n) {
    var result = n.toString();
    if (n > 0) result = " " + result;
    return result;
}

function TAB(n) {
    var result = "";
    while (linePos < (n - 1)) {
        //result += " ";
        linePos += 1;
    }
    return result;
}

function POKE(dest, value) {
    // support for C64
}

var MID$ = MID, LEFT$ = LEFT;

console.log("basicFunctions loaded.");
