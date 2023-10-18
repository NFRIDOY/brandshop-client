import Swal from 'sweetalert2'

export default function DataNotFound() {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Data Not Found',
        showConfirmButton: false,
        timer: 1000
    })
}