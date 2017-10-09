#pragma strict
var p_bulletManagerScript : bulletActivationCode;
var fireCounter : float;
var bulletManager : GameObject;
var playerBulletObj : GameObject;
var fireGap : float = 0.05;
var pb_placeHolder : GameObject;
var input : boolean;
function Start ()
 {
 	p_bulletManagerScript = bulletManager.GetComponent(bulletActivationCode);
}

function Update () 
{
	shootP_Bullet();
}

function shootP_Bullet () 
{
			if(Application.platform == RuntimePlatform.Android)
			{
			input = Input.GetMouseButtonDown(0);
			}
			else 
			{
				input = Input.GetKey( KeyCode.Space );
			}

			if( input)
			{
				if(fireCounter == 0)
				{
					p_bulletManagerScript.playerBulletArray[p_bulletManagerScript.pBulletIndex].SetActive(true);
					p_bulletManagerScript.playerBulletArray[p_bulletManagerScript.pBulletIndex].transform.position = pb_placeHolder.transform.position;
					p_bulletManagerScript.playerBulletArray[p_bulletManagerScript.pBulletIndex].transform.rotation = pb_placeHolder.transform.rotation;
					p_bulletManagerScript.playerBulletArray[p_bulletManagerScript.pBulletIndex].GetComponent(PM_playerBulletMovement).pBShootAudio.Play();
					p_bulletManagerScript.pBulletIndex++;

					if(p_bulletManagerScript.pBulletIndex == p_bulletManagerScript.playerBulletArray.length)
					{
						p_bulletManagerScript.pBulletIndex = 0;
					}
				}
					fireCounter += Time.deltaTime;
					if(fireCounter >= fireGap)
					{
						fireCounter = 0;
					}


				
			}
			else
			{
				fireCounter = 0;
			}
	}

