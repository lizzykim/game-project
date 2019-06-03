#pragma strict
private var score:int = 50;
//private var effectFlag:boolean;
private var originalScoreColor:Color;
private var scoreStyle:GUIStyle;
//var coinParticlePrefab:GameObject;
//var damageParticlePrefab:GameObject;
var skin:GUISkin;

function RIP(amount:int) {
	score = amount;
	Destroy(gameObject);
	BroadcastMessage("backtoopen");
	
}

function MeetSponge(amount:int) {
	//Instantiate(coinParticlePrefab, transform.position, transform.rotation);
	score += amount;
}

function ApplyDamage(amount:int) {
	//effectFlag = true;
	//yield WaitForSeconds(0.3);
	//effectFlag = false;
	//scoreStyle.normal.textColor = originalScoreColor;
	score -= amount;
	if (score <= 0) {
	//Instantiate(damageParticlePrefab, transform.position, transform.rotation);
	Destroy(gameObject);
	}
}

function OnGUI() {
	GUI.skin = skin;
	var rect1:Rect = Rect(0, 0, Screen.width, Screen.height);
	//var rect2:Rect = Rect(Screen.width/2, 0, Screen.width, Screen.height);
	//GUI.Label(rect1, "LIFE: " + life.ToString(), "Life");
	GUI.Label(rect1, "SCORE: " + score.ToString(), "Default");
}

function Start () {
	scoreStyle = skin.GetStyle("Default");
	originalScoreColor = scoreStyle.normal.textColor;
	//effectFlag = false;
}
function Update () {
	//if (effectFlag)
	// scoreStyle.normal.textColor = Color.red * Mathf.Abs(Mathf.Sin(40.0 * Time.time));
}