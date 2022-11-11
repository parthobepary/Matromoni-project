import Swal from "sweetalert2";
export const customPosition = (position, icon, title) => {
  Swal.fire({
    position: position,
    icon: icon,
    title: title,
    showConfirmButton: true,
    timer: 3500,
  });
};
