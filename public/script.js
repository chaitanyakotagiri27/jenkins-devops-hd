document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Show the main content after 3 seconds
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'; // Hide the loader
        document.getElementById('content').style.display = 'block'; // Show the main content
    }, 3000); // Adjust this time as needed (3000 ms = 3 seconds)

    // Button click events
    document.getElementById('willButton').addEventListener('click', () => {
        fetch('/will')
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    title: 'Response',
                    text: data.response,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while fetching data.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    });

    document.getElementById('readyButton').addEventListener('click', () => {
        fetch('/ready')
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    title: 'Response',
                    text: data.response,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while fetching data.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    });
});
