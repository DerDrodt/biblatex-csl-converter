import {BibLatexParser, BibLatexExporter, CSLExporter} from "../src"

let printObject = function(object) {
    let html = ''
    switch (typeof object) {
        case 'object':
            if (object instanceof Array) {
                object.forEach((item, index) => {
                    html += printObject(item)
                    if ((index+1)<object.length) {
                        html += ', '
                    }
                })
            } else {
                html += '<table>'
                Object.keys(object).forEach((key) => {
                    let valueHtml = printObject(object[key])
                    html += `<tr><td>${key}: </td><td>${valueHtml}</td></tr>`
                })
                html += '</table>'
            }
            break
        case 'number':
            html += String(object)
            break
        case 'string':
            html += object
            break
    }
    return html
}

let readBibFile = function() {
    let fileUpload = document.getElementById('file-upload')
    if(fileUpload.files.length) {
        let fr = new window.FileReader()
        fr.onload = function(event) {
            importBiblatex(event.target.result)
        }
        fr.readAsText(fileUpload.files[0])
    }
}

let importBiblatex = function(bibString) {
    let parser = new BibLatexParser(bibString)
    let bibDB = parser.output
    document.getElementById('bib-db').innerHTML = printObject(bibDB)
    exportCSL(bibDB)
    exportBibLatex(bibDB)
}

let exportCSL = function(bibDB) {
    let exporter = new CSLExporter(bibDB)
    let cslDB = exporter.output
    document.getElementById('csl-db').innerHTML = printObject(cslDB)
}

let exportBibLatex = function(bibDB) {
    let exporter = new BibLatexExporter(bibDB)
    let biblatex = exporter.output.split('\n').join('<br>')
    document.getElementById('biblatex').innerHTML = biblatex
}

document.getElementById('file-upload').addEventListener('change', readBibFile)
