/*
  Q Light Controller Plus
  DetachWindow.js

  Copyright (c) Massimo Callegari

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0.txt

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

function createWindow(source)
{
    console.log("Creating detached window");
    var itemComponent = Qt.createComponent("WindowLoader.qml");
    if (itemComponent.status === Component.Ready)
    {
        var windowItem = itemComponent.createObject(mainView, {"viewSource": source});
        windowItem.show();
    }
    else if (itemComponent.status === Component.Error)
    {
        console.log("error creating component");
        console.log(itemComponent.errorString());
    }
}

function createVCWindow(source, page)
{
    console.log("Creating detached window");
    var itemComponent = Qt.createComponent("WindowLoader.qml");
    if (itemComponent.status === Component.Ready)
    {
        var windowItem = itemComponent.createObject(mainView, {"viewSource": source, "page": page});
        windowItem.show();
    }
    else if (itemComponent.status === Component.Error)
    {
        console.log("error creating component");
        console.log(itemComponent.errorString());
    }
}

