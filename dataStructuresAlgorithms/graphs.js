class Vertex {
    constructor(label) {
        this.label = label;
    }
}

class Graph {
    constructor(v) {
        this.vertices = v;
        this.vertexList = [];
        this.edges = 0;
        this.adj = [];
        for ( let i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }

        this.marked = [];
        for (let i = 0; i < this.vertices; ++i) {
            this.marked[i] = false;
        }

        this.edgeTo = [];
    }

    addEdge(v,w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraphOld() {
        let ret = '';
        for (let i = 0; i < this.vertices; ++i) {
            ret += '<p>' + i.toString() + " -> ";
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined) {
                    ret += this.adj[i][j] + ' ';
                }
            }
            ret += '</p>';
        }
        return ret;
    }

    showGraph() {
        let ret = '<ul>';
        let visited = [];
        for (let i = 0; i < this.vertices; i++) {
            ret += '<li>' + this.vertexList[i] + ' -> ';
            visited.push(this.vertexList[i]);
            let delim = '';
            //console.log(this.adj[i]);
            /*for (let j = 0; j < this.vertices; j++) {
                //console.log(this.adj[i][j], this.vertexList[j]);
                if (this.adj[i][j] != undefined) {
                    if (visited.indexOf(this.vertexList[j]) < 0) {
                        ret += delim + this.vertexList[j];
                        delim = ', ';
                    }
                }
            }*/
            for (let j = 0; j < this.adj[i].length; j++) {
                let s = this.vertexList[this.adj[i][j]];
                if (s) {
                    if (visited.indexOf(s) < 0) {
                        ret += delim + s;
                        delim = ', ';
                    }
                }
            }
            ret += '</li>';
        }
        //console.log('visited',visited);
        ret += '</ul>';
        return ret;
    }

    saveFormat() {
        let ret = '';
        let delim = '';
        this.vertexList.forEach(v => {
            ret += delim + v;
            delim = ',';
        });

        for (let i = 0; i < this.vertices; ++i) {
            //let temp = '\n' + i 
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] != undefined && this.adj[i][j]) {
                    if (this.adj[i][j] > i)
                    {
                        ret += '\n' + i + ',' + this.adj[i][j];
                    }
                }
            }
        }
        return ret;
    }

    dfs(v) {
        //depth first search
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log("Visited vertex:",v);
        }
        if (this.adj[v]) {
            this.adj[v].forEach(w => {
                if (!this.marked[w]) {
                    this.dfs(w);
                }
            });
        }
    }

    bfs(s) {
        //breadth first search
        let queue = [];
        this.marked[s] = true;
        queue.push(s);//add to back of queue
        let ret = '';
        while (queue.length > 0) {
            let v = queue.shift();//remove from front of queue
            if (v != undefined) {
                if (v.toString().length > 0) {
                    ret += '<p>Visited vertex: ' + v + '</p>';
                }
            }
            if (this.adj[v]) {
                this.adj[v].forEach(w => {
                    if (!this.marked[w]) {
                        this.edgeTo[w] = v;
                        this.marked[w] = true;
                        queue.push(w);
                    }
                });
            }
        }
        return ret;
    }

    pathTo(v) {
        let source = 0;
        if (!this.hasPathTo(v)) {
            return undefined;
        }
        let path = [];
        for (let i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    }

    hasPathTo(v) {
        return this.marked[v];
    }

    topSort() {
        let ret = '<ul>';
        let stack = [];
        let visited = [];
        for (let i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        for (let i = 0; i < this.vertices; i++) {
            if (visited[i] == false) {
                this.topSortHelper(i, visited, stack);
            }
        }
        for (let i = 0; i < stack.length; i++) {
            if (stack[i] != undefined && stack[i] != false) {
                ret += '<li>' + this.vertexList[stack[i]] + '</li>';
            }
        }
        ret += '</ul>';
        return ret;
    }

    topSortHelper(v, visited, stack) {
        visited[v] = true;
        if (this.adj[v]) {
            this.adj[v].forEach(w => {
                if (!visited[w]) {
                    this.topSortHelper(visited[w], visited, stack);
                }
            });
        }
        stack.push(v);
    }
}
let g2 = new Graph(6);
$( document ).ready(function() {
    let g = new Graph(5);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.vertexList = ['0','1','2','3','4'];
    $("#example").empty();
    $("#example").append(g.showGraphOld());
    //g.dfs(0);
    $("#example").append('<p>Breadth First Search:</p>' + g.bfs(0));

    let vertex = 4;
    let paths = g.pathTo(vertex);
    let ret = '<p>Shortest path from 0 to 4</p><p>';
    while (paths.length > 0) {
        if (paths.length > 1) {
            ret += paths.pop() + ' - ';
        }
        else {
            ret += paths.pop();
        }
    }
    ret += '</p>';
    $("#example").append(ret);

    
    g2.addEdge(1,2);
    g2.addEdge(2,5);
    g2.addEdge(1,3);
    g2.addEdge(1,4);
    g2.addEdge(0,1);
    g2.vertexList = ["CS1", "CS2", "Data Structures", "Assembly Language", "Operating Systems", "Algorithms"];
    $("#example").append("<p>Topological Graph:</p>" + g2.showGraph() + g2.topSort());
    $('#text').val(g2.saveFormat());

    document.getElementById('fileload').addEventListener('change', function() {
        let fr = new FileReader();
        
        fr.onload = function() {
            console.log('results', fr.result);
            let uploadGraph = createGraphFromText(fr.result);
            $('#output').append(uploadGraph.showGraph());
        };
        fr.readAsText(this.files[0]);
    });

    let localArea = new Graph(8);
    localArea.vertexList = ['Reedham','Purley','Coulsdon Town','Coulsdon South','Caterham','Purley Oaks','South Croydon','East Croydon'];
    localArea.addEdge(0,1);
    localArea.addEdge(0,2);
    localArea.addEdge(1,3);
    localArea.addEdge(1,4);
    localArea.addEdge(1,5);
    localArea.addEdge(5,6);
    localArea.addEdge(6,7);
    $('#ex4').append(localArea.showGraph());

    vertex = 7;
    $("#ex4").append('<legend>Execise 5</legend><p>Breadth First Search:</p>' + localArea.bfs(0));
    paths = localArea.pathTo(vertex);
    //console.log('has path to 7', localArea.hasPathTo(vertex));
    //console.log('paths',paths);
    ret = '<p>Shortest path from Reedham to East Croydon</p><p>';
    while (paths.length > 0) {
        if (paths.length > 1) {
            ret += localArea.vertexList[paths.pop()] + ' - ';
        }
        else {
            ret += localArea.vertexList[paths.pop()];
        }
    }
    ret += '</p>';
    $("#ex4").append(ret);
    localArea.marked = [];
    localArea.dfs(0);
});

function download() {
    let element = document.createElement('a');
    let text = $('#text').val();
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', $('#filename').val());

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
}

function createGraphFromText(uploadText) {
    let split = uploadText.split('\n');
    if (split.length > 0) {
        let verticesList = split[0].split(',');
        let uploadGraph = new Graph(verticesList.length);
        uploadGraph.vertexList = verticesList;

        for (let i = 1; i < split.length; i++) {
            if (split[i].length > 0) {
                let s = split[i].split(',');
                uploadGraph.addEdge(s[0],s[1]);
            }
        }
        return uploadGraph;
    }
}