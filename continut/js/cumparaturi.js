function adauga()
{
    let numeProdus=document.get   .value;
    let cantitate=document.get    
    let produse=document.get   
    if(produse==null)
    {
        produse=[];
    } else{
        produse=JSON.parse(produse);
    }

    produse=produse.map(p => new produse(p.id, p.numeProdus, p.cantitate));
    let ultimulId=localStorage.getItem('ultimulId');
    if(ultimulId==null)
    {
        ultimulId=1;
    } else{
        ultimulId=JSON.parse(ultimulId);
    }

    let id=ultimulId;
    produse.push(new produse(id, numeProdus, cantitate));
    localStorage.setItem('produse', JSON.stringify(produse));
    localStorage.setItem('ultimulId',JSON.stringify(ultimulId+1));
}