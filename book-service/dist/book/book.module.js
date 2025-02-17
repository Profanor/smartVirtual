"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const book_controller_1 = require("./book.controller");
const prisma_service_1 = require("../prisma.service");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
let BookModule = class BookModule {
};
exports.BookModule = BookModule;
exports.BookModule = BookModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'AUTHOR_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        url: 'localhost:50051',
                        package: 'author',
                        protoPath: (0, path_1.join)(__dirname, '../proto/author.proto'),
                    },
                },
            ]),
        ],
        providers: [book_service_1.BookService, prisma_service_1.PrismaService],
        controllers: [book_controller_1.BookController],
    })
], BookModule);
//# sourceMappingURL=book.module.js.map