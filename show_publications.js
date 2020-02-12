var years = ["2016", "2017", "2018", "2019"]
years.forEach(function(e) {
    var str = ""
    var leaders = ["Cichocki Andrzej", "Oseledets Ivan", "Lempitsky Victor", "Burnaev Evgeny", "Phan Anh Huy", "Gusak Yuliya", "Shchutskiy Roman", "Ahmadi-Asl Salman", "Sedighin Farnaz", "Frolov Evgeny", "Khrulkov Valentin", "Daulbaev Talgat", "Grinchuk Aleksey", "Markeeva Larisa", "Chertkov Andrei", "Asante-Mensah Maame", "Sozykin Konstantin", "Sobolev Konstantin", "Vorona Igor", "Ponamarev Evgeny", "Mirvakhabova Leyla", "Znobishchev Andrei", "Ermilov Dmitrii", "Abukhovich Stanislav", "Vetrov Dmitry"]
    for (var i = 0; i < publications.length; i++) {
        if (publications[i].year == e) {
            var authors = ""
            if (publications[i].authors.includes(name) || name=="") {
                for (j = 0; j < publications[i].authors.length; j++) {
                    var lead = ""
                    if (leaders.includes(publications[i].authors[j])) {
                        lead =  " class=\"text__em\""
                    }
                    authors = authors + "<span" + lead + "> " + publications[i].authors[j] + "</span>,"
                }
                str = str + "<a href=\"" + publications[i].link + "\"  target=\"_blank\" class=\"text__title link link_link_www\">" + publications[i].name + " // " + publications[i].journal + "</a><p class=\"text__sub text__sub_left\">" + authors.slice(0, -8) + "</span>.</p><p class=\"text__sub text__sub_right\"><span>| " + publications[i].year + "</span></p>"
            }
        }
    }
    document.getElementById("y"+e).innerHTML = str
})
