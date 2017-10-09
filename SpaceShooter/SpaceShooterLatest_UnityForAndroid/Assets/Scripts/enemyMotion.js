#pragma strict
var asteroid : GameObject;
var enemy : GameObject;
var speed : float = 2.0;
var counter : float;
var enemyArray : GameObject[];
var asteroidArray : GameObject[];
var xOffsetE : int = -5;
var xOffsetA : int = 5;
var enemyRandomSelec : int;
var asteroidRandomSelec : int;
var secondRandom : int;
var randomNum : int;
var isFalling : boolean;
var enemyFall : boolean;
var asteroidFall : boolean;
var xCount : int =0;
var enemyIndex: int = 0;

function Start () 
{
	enemyArray = new GameObject[2];
	asteroidArray = new GameObject[3];
	for(var i: int = 0; i < enemyArray.length; i++)
	{
		enemyArray[i] = Instantiate( enemy,Vector3(xOffsetE +(i * 5), -0.2, 7), enemy.transform.rotation );
		enemyArray[i].SetActive(false);
	}
    for(var indx: int = 0; indx < asteroidArray.length; indx++)
	{
		asteroidArray[indx] = Instantiate( asteroid, Vector3( xOffsetA +(indx * 5), -0.2, 7), asteroid.transform.rotation);
		asteroidArray[indx].SetActive(false);
	}
}

function FixedUpdate () 
{
	enemyMovement();
}

function enemyMovement()
{	
	counter +=Time.deltaTime;
	enemyRandomSelec = Random.Range(0,2);
	secondRandom = Random.Range(0,2);
	asteroidRandomSelec = Random.Range(0,3);
    randomNum = Random.Range(0,2);
	if(counter >= 2)
	{
        isFalling = true;
	}
	if(isFalling)
	{
        if(randomNum == 0)
        {
            enemyFall = true;
        }
			
		if(randomNum == 1)
        {
            asteroidFall = true;
        }
        isFalling = false;
			
	}
	if((enemyFall) && (!enemyArray[ enemyRandomSelec ].activeSelf) && (!enemyArray[ secondRandom ].activeSelf))
	{
		enemyArray[ enemyRandomSelec ].SetActive(true);
		enemyArray[ secondRandom ].SetActive(true);
		enemyArray[ enemyRandomSelec ].transform.position.z = 10;
		enemyArray[ secondRandom ].transform.position.z = 8;
        counter = 0;
		enemyFall = false;
	}
	if((asteroidFall)&&(!asteroidArray[asteroidRandomSelec].activeSelf))
	{
		asteroidArray[asteroidRandomSelec].SetActive(true);
		asteroidArray[asteroidRandomSelec].transform.position.z = 10;
        counter = 0;
		asteroidFall = false;
	}
	for(var i: int = 0; i < enemyArray.length; i++)
	{
		if( enemyArray[i].activeSelf )
		{
			 enemyArray[i].transform.Rotate(0,0,0);
			enemyArray[i].transform.Translate(Vector3(0, 0, speed * Time.deltaTime));
           
			if( enemyArray[i].transform.position.z <= -10 )
			{
				enemyArray[i].SetActive(false);
			}
		}
		if( asteroidArray[i].activeSelf )
		{
			asteroidArray[i].transform.Translate(Vector3(0, speed * Time.deltaTime, 0));
            asteroidArray[i].transform.Rotate(0,3,0);
			if( asteroidArray[i].transform.position.z <= -10 )
			{
				asteroidArray[i].SetActive(false);
			}
		}
	}
}
