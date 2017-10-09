#pragma strict

var rotationSpeed : float = 5.0 ;
var lookRotation : Quaternion;
var enemy_explosions : GameObject[];
var enemyExplo : GameObject;

function Start () {
	//rotationSpeed = 5;

	for(var  j:int  = 0; j < enemy_explosions.Length; j++)
	{
		enemy_explosions[j] = Instantiate( enemyExplo,Vector3(0, 0, 0 ), enemyExplo.transform.rotation);
		enemy_explosions[j].SetActive(false);
	}

}

function Update () 
{
	var playerObj : GameObject  = GameObject.Find("player");
	if (playerObj != null) {
		var direction = playerObj.transform.position - this.transform.position;
		lookRotation = Quaternion.LookRotation(direction);
		transform.rotation = Quaternion.Slerp(
			transform.rotation, lookRotation, Time.deltaTime * rotationSpeed);
	}
}

function OnTriggerEnter(col : Collider)
{
	if( col.name == "player")
	{
		this.gameObject.SetActive(false);

		this.transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, 0);
		col.gameObject.GetComponent(PLy_LifeScript).player_explosions[col.gameObject.GetComponent(PLy_LifeScript).playerLife].transform.position = col.gameObject.transform.position;
		col.gameObject.GetComponent(PLy_LifeScript).player_explosions[col.gameObject.GetComponent(PLy_LifeScript).playerLife].gameObject.SetActive(true);
		col.gameObject.SetActive(true);
	}

	if( col.name == "asteroidBody(Clone)")
	{
		
			col.gameObject.SetActive(false);
			this.gameObject.SetActive(false);
			for(var j:int = 0; j < enemy_explosions.Length; j++)
			{
			enemy_explosions[j].transform.position = transform.position;
			enemy_explosions[j].gameObject.SetActive(true);
			}
	}
}

