(function(window) {
    const CoreUtils = {
        /**
         * 安全获取对象嵌套属性
         * @param {Object} obj - 对象
         * @param {string} path - 属性路径，例如 "player.stats.health"
         * @param {*} defaultValue - 如果路径不存在返回默认值
         * @returns {*} 属性值或默认值
         */
        getNestedValue: function(obj, path, defaultValue = undefined) {
            if (!obj || !path) return defaultValue;

            const keys = path.split('.');
            let result = obj;

            for (let key of keys) {
                if (result && Object.prototype.hasOwnProperty.call(result, key)) {
                    result = result[key];
                } else {
                    return defaultValue;
                }
            }

            return result;
        },

        /**
         * 构建数据映射表
         * @param {Array} savedData 
         * @returns {Object}
         */
        buildMap: function(savedData) {
            const map = {};
            if (Array.isArray(savedData)) {
                savedData.forEach(item => {
                    map[item.Name] = item.Data;
                });
            }
            return map;
        }
    };

    window.CoreUtils = CoreUtils;
})(window);
