var x,y,z,a,b;
//Function to demonstrate how BODMAS works.
function demoBodmas(){
    x = 1 + 1 * 2;
    y = (1 + 1) * 2;
    z = 1 + ( 1 * 2 );
    a = 1 + 1 * 2 / 2;
    b = (1 + 1 * 2 ) / 2; 

    //Display the values after BODMAS operations
    //Values displayed side by side
    console.log(x,y,z,a,b);
    
}
    demoBodmas();

