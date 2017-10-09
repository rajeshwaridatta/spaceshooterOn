#pragma strict


var playerExploCounter : int = 0;
var alarmTime: float = 0.0f;
var timeGap : float = 5.0f;
var waitCounter : int = 0;
var exploded : boolean; 

function Start ()
{
	exploded = false;
}

function Update () {}

function OnTriggerEnter(col : Collider)
{
	if( col.name == "player")
	{
		exploded = true;
		this.gameObject.SetActive(false);
		var playerObj = GameObject.Find("player");
		var ply_component = playerObj.GetComponent(PLy_LifeScript);
		ply_component.DecreasePlayerLife();
	}
}