
export default function Modal({open, children}){
    if(!open) return null;
    const OVERLAY = {
        position:'fixed',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'rgba(0,0,0,0.7)',
        zIndex:1000
    }
    const MODALSTYLE = {
        position:'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        backgroundColor: '#fff',
        padding:'50px',
        zIndex:1000,
        fontSize:'10px',
        width:'200px',
        textAlign:'center',
        borderRadius:'5px'
    }
    return (
    <>
        <div style={OVERLAY}></div>
        <div style={MODALSTYLE}>{children}</div>
    </>);
}