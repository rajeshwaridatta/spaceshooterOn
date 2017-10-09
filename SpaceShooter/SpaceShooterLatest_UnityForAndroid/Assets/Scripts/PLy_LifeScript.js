#pragma strict
var playerExploscript : pl_Explo;
var enemyBulletObj : GameObject;
var playerLife : int = 3;
var player_explosions : GameObject[];
var playerExplo : GameObject;
var life1: UI.Image;
var life2: UI.Image;
var life3: UI.Image;
var playerBulletObj : GameObject;
var bulletHitScript : hitEnemyAsteroid;
var scoreText : UI.Text;

var endPanel : GameObject;
var timeText : UI.Text;
var timer : int;
var sec :int = 0;
var min : int = 0;
var counter : int = 0;
var timeShowText : UI.Text;
var showScore : UI.Text;
var BgPanel : UI.Image;

function Start () 
{
	
	endPanel.SetActive(false);
	for( var k: int = 0; k < player_explosions.Length; k++)
	{
		player_explosions[k] = Instantiate(
			playerExplo, Vector3( 0, 0, 0), playerExplo.transform.rotation);
		player_explosions[k].SetActive(false);
	}
}

function Update () 
{
	setTimer();

	timeShowText.text = "Time Taken: " + min + "mins "+ " : "+ sec + "secs";
	showScore.text = scoreText.text;

}

function DecreasePlayerLife()
{
	if (playerLife > 0) {
		playerLife--;
		player_explosions[playerLife].transform.position = this.transform.position;
		player_explosions[playerLife].gameObject.SetActive(true);
		this.gameObject.SetActive(true);
		if(playerLife ==2 )
		{
			life3.enabled = false;
		}
		if(playerLife ==1 )
		{
			life2.enabled = false;
		}
		if(playerLife ==0 )
		{
			life1.enabled = false;
		}
	} else {
		this.gameObject.SetActive(false);
		player_explosions[3].gameObject.SetActive(true);
		//initiate a dialogBox with time and score
		endPanel.SetActive(true);
		//BgPanel.GetComponent<Image>().CrossFadeAlpha(135.0f, 5.0f, true));
		Time.timeScale = 0;
	}
}



function setTimer()
{
	counter++;
	if(counter == 30)
	{
		sec++;
		counter = 0;
	}
	if(sec< 10)
	{
		sec= parseInt("0" + Mathf.RoundToInt(sec).ToString());
	}
	if(sec >= 60)
	{
		min++;
		sec = 0;
	}

	timeText.text = "Time taken: " + min + " : "+ sec;
}


function OnTriggerEnter(col : Collider)
{
	if( col.name == "asteroidBody(Clone)")
	{
		if (playerLife > 0) {
		playerLife--;
		player_explosions[playerLife].transform.position = this.transform.position;
		player_explosions[playerLife].gameObject.SetActive(true);
		this.gameObject.SetActive(true);
	} else {
		this.gameObject.SetActive(false);
		player_explosions[3].gameObject.SetActive(true);

	}

	}
}
