var data = [
  {"name":"Hera", "description":"Hera is a web application that uses deep learning to address gender inequality in access to heart healthcare. It won 'Most Efficient Hack' and 'Most Diverse Hack' at HackCWRU. Naba is currently busy improving the app & conducting UX research to bring Hera to the people with a team of 3 dedicated researchers & developers.", "image":"images/hera.jpg", "demo":"https://devpost.com/software/hera-mjcr60"},
  {"name":"Margin Call", "description":"Margin Call is an accessible web-based text summarizer to help users with visual impairments 'skim' through the news or Wikipedia articles that Naba developed using Flask & conducted HCI research for under the mentorship of Franck Dernoncourt at Adobe. Her first author paper on it was accepted to the INLG conference in Japan.", "image":"images/margincall.jpg", "demo":""}, {"name":"CodeWeGo", "description":"CodeWeGo is a web application that breaks language barriers in computer science by teaching children around the world how to code in their native language. After winning the Grand Prize at ScarletHacks, Naba conducted UX research for & launched the startup accelerated by the NSF's Innovation Corps program with 3 classmates.", "image":"images/codewego.jpg", "demo":"https://devpost.com/software/codewego"}, {"name":"ElectingWomen Toolkit", "description":"Naba developed this open-source project for the Women's Peer2Peer network to help women politicians around the world stay safe on the campaign trail by documenting the threats, violence, and intimidation they face. If successful, this app will increase & retain the amount of women politicians worldwide. This app was demoed at the United Nation's CSW in New York in 2019.", "image":"images/electingwomen.jpg", "demo":"https://github.com/nrizvi/electingwomen"}, {"name":"PolyGlot", "description":"PolyGlot is a web-based IDE that empowers developers to code in their native language. Naba developed the web application using React & Node.js. It won the Grand Prize at SDHacks.", "image":"images/polyglot.jpg", "demo":"https://devpost.com/software/polyglot-pv4er8"}, {"name":"Fundz4Funz", "description":"", "image":"images/fundz4funz.jpg", "demo":"https://devpost.com/software/fundzforfunz"}, {"name":"FinTopia", "description":"This was Naba's first exciting adventure with data visualization. Fintopia aims to improve the financial health of consumers. She developed the application using D3 & Flask & received the 'Best Use of Data' award at RevolutionUC.", "image":"images/fintopia.jpg", "demo":"https://devpost.com/software/fintopia"}, {"name":"BusApp", "description":"BusApp uses QR codes to track students on buses to ensure they are not left behind on field trips. This was Naba's first iOS app.", "image":"images/busapp.jpg", "demo":"https://devpost.com/software/busapp-d84mfs"}, {"name":"The Addition8r", "description":"Naba developed this app after just three months of learning her first programming language (Python) at MHacks 9 which was also her first hackathon!", "image":"addition8r.jpg", "demo":"https://devpost.com/software/the-game-a46ko9"}
]

$(document).ready(function (){
  var html = '<table class="projects">';
  html += '<tr>';
  var flag = 0;
  $.each(data, function(index, value){
    $.each(value[0], function(index2, value2){
      html += '<th>'+value2+'</th>';
    });
    $.each(value[1], function(index3, value3){
      html += '<td>'+value3+'</td>';
    });
  html += '</tr>';
  });
  html += '</table>';
  $('#projects').html(html);
});


        // $(document).ready(function () {
        //     var html = '<table class="projects">';
        //     html += '<tr>';
        //     var flag = 0;
        //     $.each(data[0], function(index, value){
        //         html += '<th>'+index+'</th>';
        //     });
        //     html += '</tr>';
        //      $.each(data, function(index, value){
        //          html += '<tr>';
        //         $.each(value, function(index2, value2){
        //             html += '<td>'+value2+'</td>';
        //         });
        //         html += '<tr>';
        //      });
        //      html += '</table>';
        //      $('#projects').html(html);
        // });