var collTableNodes;

function trColor() {
	for(var iTable = 0; iTable < collTableNodes.length; iTable++) {

		//获取其中一个需标记的TableNode中rows集合
		var collTrNodes = collTableNodes[iTable].rows;

		//寻找第一排是否有th需要标记
		collThNodes = collTrNodes[0].getElementsByTagName("th");
		for(var iTh = 0; iTh < collThNodes.length; iTh++) {
			markTh(collTrNodes, iTh);
		}

		//tr&td
		for(var iTr = 1; iTr < collTrNodes.length; iTr++) {
			//间隔色
			if(iTr % 2 == 1)
				collTrNodes[iTr].className = "one";
			else
				collTrNodes[iTr].className = "two";

			//tr
			markTr(collTrNodes[iTr]);

			//td
			for(var iTd = 0; iTd < collTrNodes[iTr].cells.length; iTd++) {
				markTd(collTrNodes[iTr].cells[iTd]);
			}
		}
	}
}
onload = function() {
	markTables();

}

function markTables() {
	collTableNodes = document.getElementsByClassName("HighLightTable");

	trColor();
}
setInterval("markTables()", 1000);

var TrName;

function markTr(node) {
	node.onmouseover = function() {
		TrName = node.className;

		node.className = "overTr";
	}
	node.onmouseout = function() {
		node.className = TrName;
	}
}

var TdName;

function markTd(node) {
	node.onmouseover = function() {
		TdName = node.className;

		node.className = "overTd";
	}
	node.onmouseout = function() {
		node.className = TdName;
	}
}

var collCellClassNames = new Array();;

function markTh(collTrNodes, iCol) {
	collTrNodes[0].cells[iCol].onmouseover = function() {
		for(var iTr = 0; iTr < collTrNodes.length; iTr++) {
			collCellClassNames[iTr] = collTrNodes[iTr].cells[iCol].className;

			collTrNodes[iTr].cells[iCol].className = "overTh";
		}
	}
	collTrNodes[0].cells[iCol].onmouseout = function() {
		for(var iTr = 0; iTr < collTrNodes.length; iTr++) {
			collTrNodes[iTr].cells[iCol].className = collCellClassNames[iTr];
		}
	}
}