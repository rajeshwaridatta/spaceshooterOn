#pragma strict
var pb_placeHolder : GameObject;
var eb_placeHolder : GameObject;
var enemyBullet : GameObject;
var playerBullet : GameObject;
var enemyObj : GameObject;
var enemyBulletArray : GameObject[];
var playerBulletArray : GameObject [];
var i : int;
var pBulletIndex : int = 0;
var eBulletIndex : int = 0;
var timeCounter : float = 0;
var enemyInfoscript : enemyMotion;
var enemyRandomSelec: int;
var e_BulletSpeed : float;
var firingGap :  int ;

function Start()
{
    enemyInfoscript = enemyObj.GetComponent(enemyMotion);
	for(  i = 0; i < enemyBulletArray.length; i++)
	{
		enemyBulletArray[i] = Instantiate( enemyBullet,Vector3(0, 5, 5 ), enemyBullet.transform.rotation);
		enemyBulletArray[i].SetActive(false);
	}
    for(  i = 0; i < playerBulletArray.length; i++)
	{
		playerBulletArray[i] = Instantiate( playerBullet, Vector3( 0, -0.2, 0), playerBullet.transform.rotation);
		playerBulletArray[i].SetActive(false);
	}
}

function Update () 
{
	enemyRandomSelec = Random.Range(0,2);
	timeCounter += Time.deltaTime;
	if(timeCounter >= firingGap)
	{
		timeCounter=0;
		for(i = 0; i < enemyInfoscript.enemyArray.length; i ++)
		{
			if(enemyInfoscript.enemyArray[i].activeSelf)
			{
				if(!enemyBulletArray[i].activeSelf)
				{
					enemyBulletArray[i].SetActive(true);
					enemyBulletArray[i].transform.position = enemyInfoscript.enemyArray[i].transform.position;
					enemyBulletArray[i].transform.rotation = enemyInfoscript.enemyArray[i].transform.rotation;
				}

				if( enemyBulletArray[i].transform.position.z <= -7 ) 
			    {
					    enemyBulletArray[i].SetActive(false);						
			    }
		     }
		 }
	}
}
