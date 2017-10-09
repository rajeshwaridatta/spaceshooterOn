#pragma strict
var rotSpeed : float = 2.0;
var moveSpeed : float = 0.01;

function Start () 
{
	
}
function Update () 
{
    playerMovement();
}

function playerMovement()
{
	
    this.transform.Rotate(Vector3(0.0f, Input.GetAxis("Horizontal") * rotSpeed, 0.0f));
	this.transform.Translate(Vector3(0.0f, 0.0f ,Input.GetAxis("Vertical") * moveSpeed ));

}

/*function RotateLeft()
{
	 this.transform.Rotate(Vector3.left * rotSpeed);
}

function RotaRight()
{
	 this.transform.Rotate(Vector3.right * rotSpeed);
}

function moveForward()
{
	this.transform.Translate(Vector3(0.0f, 0.0f ,Vector3.up * moveSpeed ));
}
function moveBackward()
{
	this.transform.Translate(Vector3(0.0f, 0.0f ,Vector3.down * moveSpeed ));
}*/