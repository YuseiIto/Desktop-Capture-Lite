var excel = WScript.CreateObject("Excel.Application"); //Start Excel
excel.ExecuteExcel4Macro( "CALL(\"user32\",\"keybd_event\",\"JJJJJ\",44,121,1,0)" );
excel.ExecuteExcel4Macro( "CALL(\"user32\",\"keybd_event\",\"JJJJJ\",44,121,3,0)" );

var ws = WScript.CreateObject("WScript.Shell");
ws.SendKeys( "% n" );    

var bmpname = "Pic" + (new Date()).getTime() + ".bmp";//SetFileName
var out = WScript.CreateObject("ADODB.Stream");
out.Type = 1;
out.Open();
out.SaveToFile( bmpname, 2 );
out.Close();

var mspaint = ws.Run("mspaint.exe " + bmpname, 3);
WScript.Sleep( 1000 );
var ret = ws.AppActivate( mspaint );

ws.SendKeys( "^v" );
ws.SendKeys( "%{F4}" ); // 終了
ws.SendKeys( "s" );


var wshShell = WScript.CreateObject("WScript.Shell");
var beep = String.fromCharCode(007);
wshShell.Run("cmd /c @echo " + beep, 0);