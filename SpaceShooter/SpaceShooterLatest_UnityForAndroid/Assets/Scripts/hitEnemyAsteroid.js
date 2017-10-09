#pragma strict
var asteroid_explosions : GameObject[];
var enemy_explosions : GameObject[];
var enemyExplo : GameObject;
var asteroidExplo : GameObject;
var score : int ;
var newScore : int;
var hitEnemyBool : boolean;
var hitAsteroidBool : boolean;
var playerObj : GameObject;
var playerScript : PLy_LifeScript;

function Start () 
{
	hitEnemyBool = false;
	hitAsteroidBool = false;
	playerObj = GameObject.Find("player");
	playerScript  = playerObj.GetComponent(PLy_LifeScript);
	score = 0;


	for(var  j:int  = 0; j < enemy_explosions.Length; j++)
	{
		enemy_explosions[j] = Instantiate( enemyExplo,Vector3(0, 0, 0 ), enemyExplo.transform.rotation);
		enemy_explosions[j].SetActive(false);
	}
    for( var k: int = 0; k < asteroid_explosions.Length; k++)
	{
		asteroid_explosions[k] = Instantiate( asteroidExplo, Vector3( 0, 0, 0), asteroidExplo.transform.rotation);
		asteroid_explosions[k].SetActive(false);
	}
}

function Update () 
{
	
	playerScript.scoreText.text = "Score:" + score;

}

function OnTriggerEnter(col : Collider)
{
	if( col.name == "asteroidBody(Clone)")
	{
		newScore = score + 10;
		score = newScore;
		Debug.Log(score + "score");
		hitAsteroidBool = true;
        for(var i:int = 0; i < asteroid_explosions.Length; i++)
		{
			asteroid_explosions[i].transform.position = col.transform.position;
			col.gameObject.SetActive(false);
			this.gameObject.SetActive(false);
			asteroid_explosions[i].gameObject.SetActive(true);
		
			if( i == asteroid_explosions.Length)
			{
				i=0;
			}
		}
	}
	else if( col.name == "enemyPrefab(Clone)")
	{
		score = newScore + 30;
		hitEnemyBool = true;
        for(var j:int = 0; j < enemy_explosions.Length; j++)
		{
			enemy_explosions[j].transform.position = col.transform.position;
			col.gameObject.SetActive(false);
			this.gameObject.SetActive(false);
			enemy_explosions[j].gameObject.SetActive(true);

			if(i == enemy_explosions.Length)
			{
				i=0;
			}
		}
	}
}