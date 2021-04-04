
var trash = document.getElementsByClassName("fa-trash");
var coffee = document.getElementsByClassName("fa fa-coffee");
document.querySelector('.order').addEventListener('click', markCompleted)

function markCompleted(event) {
  console.log(event.currentTarget.id);
  // event.currentTarget.classList.toggle('done')
  fetch('orders', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      '_id': event.currentTarget.id

    })
  }).then(function() {
    window.location.reload()
  })
}
