#pragma strict

var bulletPrefeb : GameObject;
var initalVelocity : float;

function Start () {
	if(Input.GetButtonDown("Fire1"))
	{
		var bullet : GameObject = Instantiate(bulletPrefeb, transform.position, transform.rotation);
		
		var direction : Vector3 = transform.forward;
		bullet.rigidbody.velocity = direction * initalVelocity;
	}
}

function Update () {

}