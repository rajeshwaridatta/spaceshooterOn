#pragma strict
var bulletSpeed : float;
var playerBulletArray : GameObject[];
var i : int;
var playerBullet : GameObject;
var counter : int = 0 ;

function Start () 
{

}

function Update () 
{
    
     ShootBullet();
}

function ShootBullet()
{	 
    for( i = 0; i < playerBulletArray.Length; i++)
		{
            if( Input.GetKey( KeyCode.Space ))
	       {
	            counter++;
	       		playerBulletArray[i].SetActive(true);
               playerBulletArray[i].transform.position= new Vector3(0,-0.08,1);
               transform.Translate(Vector3(0, 0  ,  bulletSpeed * Time.deltaTime));

               if(counter > playerBulletArray.Length -1)
               {
               		counter = 0;
               }
           }
           if(playerBulletArray[i].transform.position.z > 10)
               {
               		playerBulletArray[i].SetActive(false);
               		 playerBulletArray[i].transform.position= Vector3(0,-0.08,1);
               		 playerBulletArray[i].SetActive(true);

               }
        }
    

}