import React from "react";
//
// export const Lesson14 = () => {
//     const [open, setOpen] = React.useState(false);
//
//     return (
//         <div className={"lesson14"}>
//             <Modal open={open} setOpen={setOpen} />
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <button onClick={() => setOpen(!open)} className={"btn"}>
//                 Open me
//             </button>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
//                 dolores excepturi impedit odio quas rem repudiandae sunt tempore
//                 voluptas. Atque consequuntur dolore dolorem eum iste quae quidem,
//                 recusandae saepe sapiente.
//             </p>
//         </div>
//     );
// };
//
//
// type TModalProps = {
//     open: boolean;
//     setOpen: (arg: boolean) => void;
// };
// export const Modal: React.FC<TModalProps> = ({ open, setOpen }) => {
//     return (
//         <div className={`wrapper${open ? " wrapperVisible" : " wrapperOnClose"}`}>
//             <div className={"modal"}>
//                 <button onClick={() => setOpen(!open)}> close me</button>
//             </div>
//         </div>
//     );
// };
