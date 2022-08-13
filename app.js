function getKnightMoves(cell)
{
    document.getElementById(cell).style.backgroundColor='#FF0000';
    console.log(cell);
    const s='ABCDEFGH';
    const [x,y] =cell;
   
    
    const axis =[
        [1,2],
        [2,1],
        [-1,-2],
        [-2,-1],
        [1,-2],
        [2,-1],
        [-1,2],
        [-2,1],
    ];
   axis.map(([a,b])=>
    {
    val=`${s[s.indexOf(x) + a]}${+y +b}`;
     
    [k,...j]=val;
   if(j.length<2 )
   {for(let l=0;l<8;l++)
    if(j[l]<8)
    {
  document.getElementById(val).style.backgroundColor='#00FF00'}
   }
 

})
       
    
   }





