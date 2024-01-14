<script>
//地牢按钮
		window.onload = function () {
            const form = document.querySelector('#commandForm');
            const buttonsContainer = document.querySelector('#buttons');

            // 加载已保存的按钮数据
            const savedButtons = JSON.parse(localStorage.getItem('savedButtons')) || [];

            // 创建和渲染已保存的按钮
            savedButtons.forEach(savedButton => {
                createButton(savedButton);
            });

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                // 获取按钮名称和参数
                const buttonName = document.querySelector('#button-name').value;
                const param1 = document.querySelector('#param1').value;
                const param2 = document.querySelector('#param2').value;

                // 创建按钮并保存
                const newButton = createButton({ name: buttonName, param1, param2 });
                savedButtons.push(newButton);
                localStorage.setItem('savedButtons', JSON.stringify(savedButtons));
            });

            function createButton(buttonData) {
                // 创建按钮
                const button = document.createElement('button');
                button.textContent = buttonData.name;

                // 为按钮添加点击事件监听器
                button.addEventListener('click', function () {
                    // 执行命令
                    h5gg.CommandQueue('cheat SetPlayerPos ' + buttonData.param1 + ' ' + buttonData.param2);
                });

                // 创建删除按钮
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '删除';
                deleteButton.addEventListener('click', function () {
                    // 删除按钮并保存
                    const index = savedButtons.findIndex(savedButton => savedButton.name === buttonData.name);
                    if (index !== -1) {
                        savedButtons.splice(index, 1);
                        localStorage.setItem('savedButtons', JSON.stringify(savedButtons));
                    }
                    buttonsContainer.removeChild(button);
                    buttonsContainer.removeChild(deleteButton);
                });

                // 将按钮和删除按钮添加到容器中
                buttonsContainer.appendChild(button);
                buttonsContainer.appendChild(deleteButton);

                return buttonData;
            }
        };
</script>