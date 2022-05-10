const Commentaire=({commentaire})=>{
    return( 
        <div className="p-1 flex flex-col w-1/2 border-[1px] rounded border-neutral-300 bg-white-200 ">
            <div className="flex justify-between ">
                <div className="text-sm">{commentaire.auteur}</div>
                <div className=" text-xs">{commentaire.date}</div>
            </div>
            <p className="text-xs">
                {commentaire.contenu}
            </p>
        </div>
    );
}
export default Commentaire;