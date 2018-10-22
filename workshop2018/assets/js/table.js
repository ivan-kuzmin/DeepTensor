$(document).ready(function () {
  function create_table(data) {
    let html = '';
    $.each(data, function(index, value){
      html += '<tr class="' + value.color + '">';
      html += '<td scope="row">' + value.start + '</td>'
      html += '<td scope="row">' + value.end + '</td>'
      html += '<td>'
      if (value.from == "") {
        html += '<div class=""><b>' + value.name + '</b></div>'
      } else {
        html += '<div class="small mb-2"><b>' + value.name + '</b>, ' + value.from + '</div>'
        html += '<div class="small font-weight-bold">' + value.paper + '</div>'
      }
      html += '</td>'
      html += '</tr>';
    });
    return html
  }
  $('#table1').html(create_table(data_table1));
  $('#table2').html(create_table(data_table2));
  $('#table3').html(create_table(data_table3));
});
